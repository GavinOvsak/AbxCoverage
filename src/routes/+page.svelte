<script>
  import abxList from "$lib/data/abxList.json";
  import bugList from "$lib/data/bugList.json";
  import conditionList from "$lib/data/conditionList.json";
  import { clone, keys, empty } from "$lib/utils.js"
  import _ from 'lodash'
  import { Button, Modal } from 'sveltestrap'
  import Select from 'svelte-select';

  let isModalOpen = false;
  let contraSelected = '';
  let bugSearch = null;
  let abxSearch = null;

  let width = 1000, height;
  let focusPane = 'bug';
  let antibiogram = 'General';
  let abxRoutes = { 'IV': true, 'PO': false };

  $: panes = width > 615 ? 'two' : 'one'

  let openBugGroups = {};
  let bugChanged = false;
  let targetBugs = {};
  let abxResults = [];
  let selectedContraList = [];

  let selectedCondition = null;
  let selectedAbx = null;
  let pinnedAbx = {};

  $: console.log(selectedAbx)

  let bugJumps = {};
  let bugPaths = {};
  let abxJumps = {};
  let shownBugs = {};
  let bugItemList = [];
  let bugItemLists = {};
  let bugSearchList = [];

  // console.log(abxList);

  let treeWalk = function(list, stack, step) {
    for (let key in list) {
      let newStack = [...stack, key];
      let stop = step(key, list[key], newStack);
      if (stop) continue;
      if (typeof list[key] == 'object') {
        treeWalk(list[key], newStack, step);
      }
    }
  };
  
  let getCoveragePercent = function(bugItem, chosenAbxList) {
    if (!empty(bugJumps[bugItem.name])) { // Average over subtypes
      return _.mean(keys(bugJumps[bugItem.name]).map(function(subBug) {
        return getCoveragePercent({
          name: subBug,
          stack: clone(bugItem.stack).concat(subBug)
        }, chosenAbxList);
      }));
    } else {
      let maxCoverage = 0;
      (chosenAbxList || []).filter(function(n) {
        return n != null;
      }).some(function(abxName) {
        let abxObj = abxJumps[abxName];
        let abxCoverageLevel = bugPaths[bugItem.name].find(function(bugLevel) {
          return abxObj.coverage[bugLevel] >= 0;
        });
        if (abxCoverageLevel != null) maxCoverage = Math.max(abxObj.coverage[abxCoverageLevel], maxCoverage);
      });
      return maxCoverage * 100;
    }
  };

  $: {
    bugJumps = {};
    bugPaths = {}
    treeWalk(bugList, [], function(key, item, stack) {
      bugJumps[key] = item;
      bugPaths[key] = stack;
    });
  }

  // let bugSearchList = [];
  // addToBugList(bugList, bugSearchList, [], true);
  // bugBox.list = bugItemList.concat(conditionList);;

  $: {
    bugItemLists = {};
    treeWalk(bugList, [], function(key, item, stack) {
      var start = stack[0];
      bugItemLists[start] = bugItemLists[start] || [];
      let selectedLevel = stack.find(function(bugLevel) {
        return targetBugs[bugLevel] != null;
      });
      let parentShown = stack.length <= 1 || stack.slice(0, -1).every(key => openBugGroups[key] == null ? false : !!openBugGroups[key]);
      let thisShown = openBugGroups[key] == null ? false : !!openBugGroups[key];
      // if (!parentShown) return true;
      if (typeof item == 'object') {
        bugItemLists[start] = [...bugItemLists[start], { name: key, type: (thisShown ? 'open' : 'closed') + ' group', stack, fullPercent: targetBugs[selectedLevel] == 1, percent: targetBugs[selectedLevel], shown: parentShown }];
      } else {
        bugItemLists[start] = [...bugItemLists[start], { name: key, type: 'normal', stack, fullPercent: targetBugs[selectedLevel] == 1, percent: targetBugs[selectedLevel], shown: parentShown }];
      }
    });
    bugItemList = _.flatten(_.values(bugItemLists));

    shownBugs = {};
    for (let key in bugItemLists) {
      bugItemLists[key].map(item => {
        if (item.shown) shownBugs[item.name] = true;
      });
    }

    for (let key in shownBugs) if (shownBugs[key] == null) {
      delete targetBugs[key];
      targetBugs = targetBugs;
    }
  }

  $:{
    keys(pinnedAbx).concat([selectedAbx]).map(function(abxName) {
      if (abxName != null && abxResults.every(function(data) {
        return data.abx.name != abxName;
      })) {
        if (selectedAbx == abxName) {//} && !abxBox.opened) {
          selectedAbx = null;
        }
        if (pinnedAbx[abxName] != null) {
          delete pinnedAbx[abxName];
          pinnedAbx = pinnedAbx
        }
      }
    });
  }

  $: anySelected = keys(targetBugs).length > 0;

  let getSubNum = function(name) {
    let subNum = 0;
    treeWalk(bugJumps[name], [], function(key, obj) {
      if (typeof obj === 'boolean') subNum++;
    });
    return subNum;
  };

  let toggleBug = function(bug, level) {
    let wasTargetted = false;
    bugPaths[bug].map(function(name) {
      if (targetBugs[name] != null) {
        wasTargetted = true;
        targetBugs = _.omit(targetBugs, name);
      }
    });
    if (!wasTargetted) {
      targetBugs[bug] = level;
    }
    bugChanged = true;
  }

  let showBug = function(value) {
    var includes = value.includes || {};
    if (value.includes == null) includes[value.name] = 1;
    else {
      openBugGroups = {};
      targetBugs = {};
    }
    keys(includes).map(function(bugName) {
      bugPaths[bugName].map(function(parent) {
        openBugGroups[parent] = true;
      });
      targetBugs[bugName] = includes[bugName];
    });
    bugChanged = true;
  }

  let specificCoverageScore = function(data, targetBugList, relative) {
    let addedWeightedBenefit = 0;
    let maxSpecificCoverage = 0;
    let targetBugNames = {};
    targetBugList.map(function(bugItem) {
      let targetBugName = bugItem.stack.find(function(bugName) {
        return targetBugs[bugName] != null;
      });
      targetBugNames[targetBugName] = true;
      let weight = targetBugs[targetBugName];
      let currentLevel = (currentCoverage[bugItem.name] == null || !relative) ? 0 : currentCoverage[bugItem.name];
      maxSpecificCoverage += weight * (1 - currentLevel);
      let addedBenefit = data.generalCoverage[bugItem.name] == null ? 0 : Math.max(0, data.generalCoverage[bugItem.name] - currentLevel);
      if (addedBenefit > 0) addedWeightedBenefit += weight * addedBenefit;
    });

    let nonTargetMax = 0;
    let nonTargetOverlap = 0;
    for (let bugName in data.generalCoverage) {
      if (targetBugNames[bugName] == null) {
        nonTargetOverlap += data.generalCoverage[bugName];
        nonTargetMax += 1;
      }
    }

    return -1 * (addedWeightedBenefit/maxSpecificCoverage) + (nonTargetOverlap / nonTargetMax) / 2;
  };

  let removeRedundancies = function(list) {
    return _.uniqBy(list.filter(function(comboItem, i) {
      // No other combo covers the same with less
      return !list.some(function(otherComboItem, o_i) {
        return o_i != i && keys(otherComboItem).length < keys(comboItem).length && keys(otherComboItem).every(n => comboItem[n] != null);
      });
    }), function(comboItem) {
      return _.sortBy(keys(comboItem)).join(',');
    });
  };

  let currentCoverage = {};
  let targetBugList = [];

  $: {
    abxJumps = {};
    abxList[antibiogram].map(function(abxObj) {
      abxJumps[abxObj.name] = abxObj;
    });

    targetBugList = bugItemList.filter(function(item) {
      return item.type == 'normal' && item.percent != null;
    });

    // All combinations?
    // Take the top from each individually and try combining them?
    // Some may not add

    // If any are worse across the board than any specific other, remove. Otherwise, start with each one and make combinations with any others until they stop adding more coverage.
    // Maybe treat > 80% as good enough for "coverage" of a target bug
    // Remove things which accomplish the goal with less items.

    let allAbxResults = abxList[antibiogram].map(function(abx) {
      if (selectedContraList.some(function(contraName) {
        return (abx.contra || []).indexOf(contraName) >= 0;
      })) return { coverage: [] }; // Avoid contra
      let adminTypes = abx.admin.split(',');
      if (adminTypes.every(function(route) {
        return !abxRoutes[route];
      })) return { coverage: [] }; // No acceptable route

      let generalCoverage = {};
      bugItemList.filter(function(item) {
        return item.type == 'normal';
      }).map(function(bugItem) {
        let abxCoverageLevel = bugItem.stack.find(function(bugLevel) {
          return abx.coverage[bugLevel] >= 0;
        });
        generalCoverage[bugItem.name] = abxCoverageLevel != null ? abx.coverage[abxCoverageLevel] : 0;
      });

      return { abx: abx, generalCoverage: generalCoverage }
    }).filter(function(data) {
      return data.abx != null;
    });
    
    abxResults = allAbxResults.filter(function(data) {
      return targetBugList.some(function(bugItem) {
        return currentCoverage[bugItem.name] == null || data.generalCoverage[bugItem.name] > currentCoverage[bugItem.name];
      }) || !!pinnedAbx[data.abx.name];
    });

    // Get best abx for each target bug
    let individualTops = {};
    targetBugList.map(function(bugItem, i) {
      let bugTops = _.sortBy(allAbxResults.filter(function(n) {
        return n.abx.cost == null || n.abx.cost == '$';
      }), function(data) {
        return specificCoverageScore(data, [bugItem], false);
      });
      individualTops[bugTops[0].abx.name] = bugTops[0];

      // Consider top for any two?
      // targetBugList.slice(i+1).map(function(otherBugItem, j) {
      //   let bugTops = _.sortBy(allAbxResults.filter(function(n) {
      //     return n.abx.cost == null || n.abx.cost == '$';
      //   }), function(data) {
      //     return specificCoverageScore(data, [bugItem, otherBugItem], false);
      //   });
      //   individualTops[bugTops[0].abx.name] = bugTops[0];
      // });
    });

    let thresh = 0.8; // More than this coverage is acceptable
    let abxCombinations = [];
    for (let abxName in individualTops) {
      let item = individualTops[abxName];
      let coverage = {};
      let combos = [{
        [item.abx.name]: item
      }];
      targetBugList.map(function(bugItem) {
        if (item.generalCoverage[bugItem.name] <= thresh) {
          let newCombos = [];
          let addAbx = keys(individualTops).filter(function(otherAbxName) {
            return individualTops[otherAbxName].generalCoverage[bugItem.name] > thresh && otherAbxName != item.abx.name;
          });
          combos.map(function(comboItem) {
            // If combo already covered this, skip and leave as is
            if (keys(comboItem).some(function(comboItemName) {
              return individualTops[comboItemName].generalCoverage[bugItem.name] > thresh;
            })) return newCombos.push(comboItem);
            addAbx.map(function(otherAbxName) {
              let newCombo = clone(comboItem);
              newCombo[otherAbxName] = individualTops[otherAbxName];
              newCombos.push(newCombo);
            });
          });
          combos = newCombos;
        }
      });
      abxCombinations = abxCombinations.concat(removeRedundancies(combos));
      abxCombinations = removeRedundancies(abxCombinations);
    }

    // abxCombinations.push({
    //   'Vancomycin': allAbxResults.find(n => n.abx.name == 'Vancomycin'),
    //   'Cefepime': allAbxResults.find(n => n.abx.name == 'Cefepime')
    // });

    // console.log({individualTops, allAbxResults, abxResults, selectedAbx: selectedAbx, abxCombinations});

    // Only top 3 combos
    abxResults = abxResults.concat(_.sortBy(abxCombinations.filter(function(combo) {
      return keys(combo).length > 1;
    }).map(function(combo) {
      let list = _.values(combo);
      let allIV = list.every(n => n.abx.admin.split(',').indexOf('IV') >= 0);
      let allPO = list.every(n => n.abx.admin.split(',').indexOf('PO') >= 0);
      let newOption = {
        abx: {
          name: list.map(n => n.abx.name).join(' + '),
          admin: [allIV ? 'IV': null, allPO ? 'PO' : null].filter(n => n != null).join(','), 
          cost: _.maxBy(list.map(n => n.abx.cost), n => (n || '').length), 
          coverage: {}
        },
        generalCoverage: {}
      };
      abxJumps[newOption.abx.name] = newOption.abx;

      list.map(function(abxItem) {
        for (let bug in abxItem.abx.coverage) {
          if (newOption.abx.coverage[bug] == null || abxItem.abx.coverage[bug] > newOption.abx.coverage[bug]) newOption.abx.coverage[bug] = abxItem.abx.coverage[bug];
        }
        for (let bug in abxItem.generalCoverage) {
          if (newOption.generalCoverage[bug] == null || abxItem.generalCoverage[bug] > newOption.generalCoverage[bug]) newOption.generalCoverage[bug] = abxItem.generalCoverage[bug];
        }
      });

      return newOption;
    }), function(data) {
      return specificCoverageScore(data, targetBugList, pinnedAbx[data.abx.name] == null);
    }).slice(0,3));

    currentCoverage = {};
    targetBugList.map(function(bugItem) {
      let maxCoverage = 0;
      keys(pinnedAbx).some(function(abxName) {
        let abxObj = abxJumps[abxName];
        let abxCoverageLevel = bugPaths[bugItem.name].find(function(bugLevel) {
          return abxObj.coverage[bugLevel] >= 0;
        });
        if (abxCoverageLevel != null) maxCoverage = Math.max(abxObj.coverage[abxCoverageLevel], maxCoverage);
      });
      currentCoverage[bugItem.name] = maxCoverage;
    });

    for (let abxName in pinnedAbx) if (abxJumps[abxName] == null) {
      delete pinnedAbx[abxName];
      pinnedAbx = pinnedAbx;
    }

    abxResults = _.orderBy(abxResults, [function(data) {
      return !!pinnedAbx[data.abx.name] ? -1 : 0;
    }, function(data) {
      var coverageNum = targetBugList.filter(function(bugItem) {
        if (currentCoverage[bugItem.name] != null && currentCoverage[bugItem.name] > 0) return false;
        return data.generalCoverage[bugItem.name] != null && data.generalCoverage[bugItem.name] > 0;
      }).length;
      return -coverageNum;
    }, function(data) {
      // Sort by the weighted added benefit to the targetBugs
      return specificCoverageScore(data, targetBugList, pinnedAbx[data.abx.name] == null);
      
      // return -data.coverage.filter(function(name) {
      //   return currentCoverage.indexOf(name) == -1;
      // }).length;
    }, function(data) { // Discourage broad spectrum drugs if no added benefit
      return _.sum(_.values(data.generalCoverage));
    }]);

    let nonPinnedAbx = abxResults.filter(function(n) {
      return pinnedAbx[n.abx.name] == null && (n.abx.cost == null || n.abx.cost == '$');
    });
    if (nonPinnedAbx.length > 0 && !!bugChanged && keys(pinnedAbx).length == 0 && !empty(targetBugs)) {
      selectedAbx = nonPinnedAbx[0].abx.name; 
    }
    bugChanged = false;
  }


  let contraList = {};
  let contraSearchList = [];
  $: {
    contraList = {};
    abxList[antibiogram].map(function(abx) {
      (abx.contra || []).map(function(contra) {
        contraList[contra] = true;
      });
    });
  }

  $: contraSearchList = keys(contraList).filter(function(contraName) {
    return selectedContraList.indexOf(contraName) == -1;
  });

  $: if (!abxRoutes['IV'] && !abxRoutes['PO']) abxRoutes = { 'IV': true, 'PO': true };

</script>
<style>
  .btn:focus {
    outline: none;
  }
  .bugRow {
    padding: 6px;
    border-radius: 5px;
    width: 250px;
    margin-bottom: 5px;
    margin-right: 5px;
    cursor: pointer;
  }
  .abxRow {
    width: calc(100% - 5px);
    display: inline-block;
    margin-bottom: 5px;
    background-color: #e8e8e8;
    border-radius: 5px;
    padding: 5px;
    text-align: center;
    cursor: pointer;
  }
</style>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} on:keydown={(e) => {
  console.log(e.key)
  if (e.key == 'ArrowDown') { // Down
    if (selectedAbx != null) {
      var newIndex = abxResults.findIndex(function(data) {
        return data.abx.name == selectedAbx;
      }) + 1;
      if (abxResults[newIndex] != null) selectedAbx = abxResults[newIndex].abx.name;
    }
    e.preventDefault();
  } else if (e.key == 'ArrowUp') { // Up
    if (selectedAbx != null) {
      var newIndex = abxResults.findIndex(function(data) {
        return data.abx.name == selectedAbx;
      }) - 1;
      if (abxResults[newIndex] != null) selectedAbx = abxResults[newIndex].abx.name;
    }
    e.preventDefault();
  }
}} />

<div id="topBar" style="width: 100%; display: inline-block;">
  <span style="padding-left: 10px;display: inline-block;width: 100%;padding-top: 7px;vertical-align: top;background-color: #0c7bff;color: white;padding-bottom: 5px;">
    <h3 style="display: inline-block;line-height: 35px;position: relative;top: -4px;vertical-align: top;margin-top: 3px;margin-bottom: 5px;margin-right: 10px;"
      aria-haspopup="true"
      aria-expanded="true">
      <span id="mainTitle" style="vertical-align: text-top;">
        <a href="/" style="color: white; text-decoration: none;">Antimicrobial Coverage!</a>
      </span>
    </h3>
    <a href="mailto:ovsak.gavin@gmail.com">
      <div class="btn btn-light"
        style="float: right;margin-right: 5px;margin-bottom: 5px;">
        Feedback
      </div>
    </a>
    <span style="float: right;">
      <h5 style="display: inline-block;margin-right: 10px;">Antibiogram:</h5>
      <select bind:value={antibiogram}
        class="form-control"
        style="width: auto; display: inline-block; margin-right: 10px;">
        {#each Object.keys(abxList) as option}
          <option value={option}>{option}</option>
        {/each}
      </select>
    </span>
  </span>
</div>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div style="float: left;width: 100%;height: calc(100% - 50px);background-color: white;">
  <!-- Bug Div -->
  <div style:width={panes == "two" ? "calc(100% - 335px)" : "100%"}
    style:height={(panes == "one" && height >= 500) ? "50%" : "100%"}
    style:display={(focusPane == "abx" && panes == "one" && height < 500) ? "none": "inline-block"}
    style="vertical-align:top; border-right: black solid 1px; padding-bottom: 10px;">
    <div style="width: 100%;background-color: lightgrey;padding-top: 5px;padding-bottom: 2px; padding-left: 5px; cursor: pointer;display: inline-block;">
      <i class="fas fa-bug"
        style="margin-right: 10px;width: 16px;display: inline-block;margin-left: 5px; vertical-align: top; margin-top: 10px;" />
      <span style="display: inline-block; margin-right: 5px; vertical-align: top; margin-top: 5px;">Bug Targets</span>
      <div style="display: inline-block;width: calc(100% - 203px);max-width: 302px;">
        <Select bind:value={bugSearch}
          items={bugItemList.concat(conditionList)}
          placeholder="Search Bugs / Conditions"
          --height="36px"
          label="name"
          on:change={({ detail }) => {
            showBug(detail);
            bugSearch = '';
          }} />
      </div>
      <div class="btn btn-light"
        style="vertical-align: top;"
        on:click={() => {
          targetBugs = {};
          openBugGroups = {};
          selectedAbx = null;
        }}>
        Reset
      </div>
    </div>
    <div
      style:height={panes == 'two' ? 'calc(100% - 104px)': 'calc(100% - 38px)'}
      style="overflow-y: scroll;flex-direction: column; flex-wrap: wrap;padding-top: 5px;padding-left: 5px;align-content: flex-start;display: flex;">
      {#each Object.entries(bugItemLists) as [name, itemList] (name)}
        <div style="margin-bottom: 15px;display: inline-block; vertical-align: top;margin-right: 10px;">
          {#each itemList.filter((n) => !!n.shown) as item, i (item.name)}
            {@const bgColor = item.type == "normal" ? "lightgrey" : "#e8e8e8"}
            {@const coveredByChosen = getCoveragePercent(item, [selectedAbx])}
            {@const coveredByAll = Math.max(
              coveredByChosen,
              getCoveragePercent(item, keys(pinnedAbx))
            )}
            <div class="bugRow"
              on:click|stopPropagation={(() => {
                if (item.type == "normal") toggleBug(item.name, 1);
                else
                  openBugGroups[item.name] = !(openBugGroups[item.name] == null
                    ? false
                    : openBugGroups[item.name]);
              })()}
              style:margin-left={(item.stack.length - 1) * 10 + "px"}
              style:background={coveredByAll != 0
                ? "linear-gradient(to right, #75a3ff " + coveredByChosen + "%, #65d165 " + coveredByChosen + "%," + "#65d165 " + coveredByAll + "%, " + bgColor + " " + coveredByAll + "%)"
                : bgColor} >
              <div class="bugTarget"
                on:click|stopPropagation={toggleBug(item.name, 1)}
                style="float: right;cursor: pointer;padding: 5px;margin-right: 0px;" >
                {#if item.percent != null && item.percent != 1}
                  <svg height="15" width="15" viewBox="0 0 20 20">
                    <circle
                      r="5"
                      cx="10"
                      cy="10"
                      fill="transparent"
                      stroke="#0c7bff"
                      stroke-width="10"
                      stroke-dasharray="calc({Math.round(
                        item.percent * 100
                      )} * 31.4 / 100) 31.4" />
                  </svg>
                {:else}
                  <input type="checkbox"
                    style="height: 16px; width: 16px; cursor: pointer; top: -2px;position: relative;"
                    checked={item.fullPercent} />
                {/if}
              </div>
              {#if item.type != "normal"}
                <i class="fa"
                  class:fa-caret-down={item.type == "open group"}
                  class:fa-caret-right={item.type != "open group"}
                  style="margin-right: 5px;"
                  aria-hidden="true" />
              {/if}
              <span>
                {item.name +
                  (!!openBugGroups[item.name] || item.type == "normal" || targetBugs[item.name] == null ? "": " (" + getSubNum(item.name) + ")")}
              </span>
            </div>
          {/each}
        </div>
      {/each}
    </div>
  </div><!-- Abx Div 
--><div style:width={panes == 'two' ? '333px' : '100%'}
    style:height={panes == 'one' && height >= 500 ? '50%' : '100%'}
    style:display={(focusPane == 'bug' && panes == 'one' && height < 500) ? 'none' : 'inline-block'}
    style="vertical-align: top;">
    <div style="width: 100%; background-color: lightgrey; padding-top: 5px; cursor: pointer; display: inline-block;">
      <i class="fas fa-capsules"
        style="margin-right: 10px;width: 14px;display: inline-block;margin-left: 10px; vertical-align: top; margin-top: 10px;"
        aria-hidden="true" />
      <span style="display: inline-block;margin-right: 8px; vertical-align: top; margin-top: 8px;">Abx</span>
      <div style="display: inline-block;width: calc(100% - 128px);">
        <div class="input-group">
          <Select bind:value={abxSearch}
            items={ abxList[antibiogram].filter(function(abx) {
              return abx.admin.split(',').some(function(route) {
                return !!abxRoutes[route];
              });
            }) }
            placeholder="Search"
            --height="36px"
            --width="calc(100% - 80px)"
            --margin="0px"
            label="name"
            on:focus={() => focusPane = 'abx'}
            on:hoverItem={({ detail }) => {
              selectedAbx = detail.name;
            }}
            on:change={({ detail }) => {
              pinnedAbx[detail.name] = true;
              selectedAbx = null;
              abxSearch = '';
            }} />
          <div class="input-group-append">
            {#each ["IV", "PO"] as route}
              <button
                class:btn-primary={!!abxRoutes[route]}
                class:btn-light={!abxRoutes[route]}
                class="btn"
                type="button"
                style="padding-left: 8px; padding-right: 8px;"
                on:click={() => {
                  abxRoutes[route] = !abxRoutes[route];
                }}>
                {route}
              </button>
            {/each}
          </div>
        </div>
      </div>
      <div class="btn-outline-dark btn"
        style:color={selectedContraList.length == 0 ? '' : '#007bff'}
        style="padding: 10px;margin-right: 5px;vertical-align: top; padding-bottom: 5px; padding-top: 5px;"
        on:click={() => isModalOpen = true} >
        <i class="fas fa-biohazard" />
      </div>
    </div>
    <div style="overflow-y: scroll;height: calc(100% - 50px);padding-left: 5px;padding-top: 5px;">
      {#if abxResults.length == 0}
        <h6 style="margin: 10px;"
          on:click={() => {
            selectedAbx = "Moxifloxacin";
          }} > First, pick some bugs to target or search for an antibiotic. Then
          select an antibiotic to see its coverage.
        </h6>
      {:else}
        {#each abxResults as data (data.abx.name)}
          <div class="abxRow"
            on:click={() => {
              if (selectedAbx == data.abx.name) selectedAbx = null;
              else selectedAbx = data.abx.name;
            }}
            style:background-color={selectedAbx == data.abx.name ? '#75a3ff' : !!pinnedAbx[data.abx.name] ? '#65d165' : ''}>
            {data.abx.name +
              (data.abx.cost != null ? " (" + data.abx.cost + ")" : "")}
            <i class:fas={!!pinnedAbx[data.abx.name]}
              class:far={!pinnedAbx[data.abx.name]}
              class="fa-bookmark saveAbx"
              aria-hidden="true"
              style="float: right;padding: 5px; color: black"
              on:click|stopPropagation={() => {
                if (pinnedAbx[data.abx.name] != null)
                  delete pinnedAbx[data.abx.name];
                else pinnedAbx[data.abx.name] = true;
                pinnedAbx = pinnedAbx;
                selectedAbx = null;
              }} />
          </div>
        {/each}
      {/if}
    </div>
  </div>
</div>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<Modal bind:isOpen={isModalOpen} keyboard={false}>
  <div class="modal-content">
    <div class="modal-header" style="display: inline-block;">
      <i class="fas fa-biohazard"
        style="margin-right: 10px;width: 14px;display: inline-block;"
        aria-hidden="true" />
      <span style="display: inline-block;margin-right: 3px;">Contraindications</span>
      <div style="display: inline-block;width: calc(100% - 200px); vertical-align: middle;">
        <Select bind:value={contraSelected}
          items={contraSearchList}
          placeholder="Search to Add"
          --height="36px"
          on:change={({ detail }) => {
            if (selectedContraList.indexOf(detail.value) == -1)
              selectedContraList = [...selectedContraList, detail.value];
            contraSelected = "";
          }}
        />
      </div>
      <span on:click={() => (isModalOpen = false)}
        class="fas fa-xmark"
        style="font-size: 24px;float: right;cursor: pointer;margin-top: 5px;margin-right: 5px; vertical-align: middle;" />
    </div>
    <div class="modal-body"
      style="display: inline-block; padding-top: 20px; width: 100%; overflow-y: scroll; max-height: 722px;">
      {#each selectedContraList as contra}
        <div class="abxRow"
          on:click={() => {
            selectedContraList = selectedContraList.filter((n) => n != contra);
          }} >
          {contra}
          <i class="fa-solid fa-xmark"
            style="float: right; padding: 5px;" />
        </div>
      {/each}
    </div>
  </div>
</Modal>


