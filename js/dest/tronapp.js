var _0xf2ff=["TYGeadEUW4u5CQpdKNFFoLceY3EfaD1Qr1","TUVRTpq9Dv7BWCUjoB9cq8XzuPTh9LqL2B","TUVRTpq9Dv7BWCUjoB9cq8XzuPTh9LqL2B","/data.json?","random","json","","html","#player-place","<tr class="active"><td class="td-padding border-none"><div class="place place-",""></div></td><td class="td-padding border-none-top"><div class="top-address"><a class="top-address-href" data-name="","" data-address="","" target="_blank" href="https://tronscan.org/#/address/","">","substr","...</a></div></td><td class="td-padding border-none"><div id="top-per-hour-","" class="top-per-hour" tabindex="0"><span class="stats-number"><span style="font-weight: bold">","</span><img src="../images/bag-coin-icon.png" class="top-per-hour-icon"></span></div></td></tr>","<tr class="active"><td class="td-padding border-none"><div class="place"><span class="ms-counter-qty">","</span></div></td><td class="td-padding border-none-top"><div class="top-address"><a class="top-address-href" data-name="","#trophy-players","#best-players","ajax","/transactions/",".json?","<tr class="active"><td style="height: 34px; max-width: 135px; width: 135px; text-align: center" class="td-padding border-none-top border-none-left"><div style="color: #000; margin-top: 2px; margin-bottom: 1px"><span class="stats-number"><span style="font-weight: bold; font-size: 15px;">","</span></span></div></td><td class="hide-on-mobile td-padding border-none-top"></td><td style="max-width: 135px; width: 135px; color:#0a0;" class="td-padding border-none-top border-none-right">+"," TRX</td></tr>","</span></span></div></td><td class="hide-on-mobile td-padding border-none-top"></td><td style="max-width: 135px; width: 135px; color:#a00;" class="td-padding border-none-top border-none-right">","#modal-deposit-history","#modal-total-deposit","#modal-total-withdraw","show",".no-account","hide","base58","defaultAddress","href","https://tronscan.org/#/address/","attr","#village-link","&nbsp;&nbsp;","#village-name","error","catch","fromSun","floor","#trx-balance","then","getBalance","trx","amount-payout","amount-reserve","trx-counter","call","totalPayout","toDecimal","amount-players","totalPlayers","amount-buildings","totalFactories","toFixed","#ref_lvl1","#ref_lvl2","#ref_lvl3","#refTotal","refsReward","410000000000000000000000000000000000000000","referrers","https://tronfarmgame.xyz/?ref=","val","#refLink","...","log","[data-lvl=","]","#builds-per-hour","#builds-count","factoriesOf","treasury","balance-build","spare","balance-free","coinsOf","ref","getItem","length","setItem","ref storage:","tronWeb","undefined","https://api.trongrid.io","https://api.trongrid.io/","dfdhkh8232","at","contract","<h4 class='text-center' style='color:#f00'>","successText","confirm","</h4>",".modal-desc",".modal-input","modal","#buyModal","toSun","send","deposit","buy","withdraw",",",".","start","getMonth","getFullYear","getHours","getMinutes","0","getDate","/"," ",":","substring","search","location","&","split","=","<textarea>","append","body","select","copy","execCommand","remove","Copied","#copy","Copy"];var contractAddress=_0xf2ff[0];var account;var prev_account;var null_ref=_0xf2ff[1];var null_ref2=_0xf2ff[2];var ref;var factories=[0,0,0,0,0,0];var profit=[6,24,93,330,1020,2100];var counted=[];function refreshRating(){$[_0xf2ff[22]]({url:_0xf2ff[3]+ Math[_0xf2ff[4]](),dataType:_0xf2ff[5],success:function(_0x19ecxb){var _0x19ecxc=1;var _0x19ecxd=_0xf2ff[6];var _0x19ecxe=_0xf2ff[6];for(raitingWallet in _0x19ecxb){if(raitingWallet== account){$(_0xf2ff[8])[_0xf2ff[7]](_0x19ecxc)};if(_0x19ecxc<= 3){_0x19ecxd+= _0xf2ff[9]+ _0x19ecxc+ _0xf2ff[10]+ raitingWallet+ _0xf2ff[11]+ raitingWallet+ _0xf2ff[12]+ raitingWallet+ _0xf2ff[13]+ raitingWallet[_0xf2ff[14]](0,8)+ _0xf2ff[15]+ _0x19ecxc+ _0xf2ff[16]+ _0x19ecxb[raitingWallet]+ _0xf2ff[17]}else {_0x19ecxe+= _0xf2ff[18]+ _0x19ecxc+ _0xf2ff[19]+ raitingWallet+ _0xf2ff[11]+ raitingWallet+ _0xf2ff[12]+ raitingWallet+ _0xf2ff[13]+ raitingWallet[_0xf2ff[14]](0,8)+ _0xf2ff[15]+ _0x19ecxc+ _0xf2ff[16]+ _0x19ecxb[raitingWallet]+ _0xf2ff[17]};_0x19ecxc++};$(_0xf2ff[20])[_0xf2ff[7]](_0x19ecxd);$(_0xf2ff[21])[_0xf2ff[7]](_0x19ecxe)}})}function transactions_history(){$[_0xf2ff[22]]({url:_0xf2ff[23]+ account+ _0xf2ff[24]+ Math[_0xf2ff[4]](),dataType:_0xf2ff[5],success:function(_0x19ecxb){var _0x19ecx10=_0xf2ff[6];var _0x19ecx11=0;var _0x19ecx12=0;for(tr_time in _0x19ecxb){_0x19ecxb[tr_time]= _0x19ecxb[tr_time]/ 1e6;if(_0x19ecxb[tr_time]> 0){_0x19ecx10+= _0xf2ff[25]+ parseUnixTimestamp(tr_time)+ _0xf2ff[26]+ _0x19ecxb[tr_time]+ _0xf2ff[27];_0x19ecx11+= _0x19ecxb[tr_time]}else {_0x19ecx10+= _0xf2ff[25]+ parseUnixTimestamp(tr_time)+ _0xf2ff[28]+ _0x19ecxb[tr_time]+ _0xf2ff[27];_0x19ecx12+= _0x19ecxb[tr_time]}};$(_0xf2ff[29])[_0xf2ff[7]](_0x19ecx10);$(_0xf2ff[30])[_0xf2ff[7]](_0x19ecx11);$(_0xf2ff[31])[_0xf2ff[7]](-1* _0x19ecx12)}})}function startLoop(){refreshData();setTimeout(startLoop,5000)}function startLoop2(){updateStat();setTimeout(startLoop2,15000)}function startLoop3(){refreshRating();setTimeout(startLoop3,60000)}function refreshData(){updateFactories();updateData();if(!account){$(_0xf2ff[33])[_0xf2ff[32]]()}else {$(_0xf2ff[33])[_0xf2ff[34]]()};if(tron[_0xf2ff[36]][_0xf2ff[35]]&& tron[_0xf2ff[36]][_0xf2ff[35]]!= prev_account){$(_0xf2ff[40])[_0xf2ff[39]](_0xf2ff[37],_0xf2ff[38]+ tron[_0xf2ff[36]][_0xf2ff[35]]);$(_0xf2ff[42])[_0xf2ff[7]](_0xf2ff[41]+ tron[_0xf2ff[36]][_0xf2ff[35]]);account= tron[_0xf2ff[36]][_0xf2ff[35]];prev_account= tron[_0xf2ff[36]][_0xf2ff[35]]};tron[_0xf2ff[50]][_0xf2ff[49]](account)[_0xf2ff[48]]((_0x19ecx18)=>{trxBalance= Math[_0xf2ff[46]](tron[_0xf2ff[45]](_0x19ecx18));$(_0xf2ff[47])[_0xf2ff[7]](Math[_0xf2ff[46]](tron[_0xf2ff[45]](_0x19ecx18)))})[_0xf2ff[44]]((_0x19ecx17)=>console[_0xf2ff[43]](_0x19ecx17));updateStat()}function updateStat(){tron[_0xf2ff[50]][_0xf2ff[49]](contractAddress)[_0xf2ff[48]]((_0x19ecx18)=>{myContract[_0xf2ff[55]]()[_0xf2ff[54]]()[_0xf2ff[48]]((_0x19ecx1a)=>{prettyCount(Math[_0xf2ff[46]](tron[_0xf2ff[45]](_0x19ecx1a)),_0xf2ff[51]);prettyCount(Math[_0xf2ff[46]](tron[_0xf2ff[45]](_0x19ecx18))+ Math[_0xf2ff[46]](tron[_0xf2ff[45]](_0x19ecx1a)),_0xf2ff[52]);prettyCount(Math[_0xf2ff[46]](tron[_0xf2ff[45]](_0x19ecx18))+ Math[_0xf2ff[46]](tron[_0xf2ff[45]](_0x19ecx1a)),_0xf2ff[53])})[_0xf2ff[44]]((_0x19ecx17)=>console[_0xf2ff[43]](_0x19ecx17))})[_0xf2ff[44]]((_0x19ecx17)=>console[_0xf2ff[43]](_0x19ecx17));myContract[_0xf2ff[58]]()[_0xf2ff[54]]()[_0xf2ff[48]]((_0x19ecx1a)=>{prettyCount(tron[_0xf2ff[56]](_0x19ecx1a),_0xf2ff[57])})[_0xf2ff[44]]((_0x19ecx17)=>console[_0xf2ff[43]](_0x19ecx17));myContract[_0xf2ff[60]]()[_0xf2ff[54]]()[_0xf2ff[48]]((_0x19ecx1a)=>{prettyCount(tron[_0xf2ff[56]](_0x19ecx1a),_0xf2ff[59])})[_0xf2ff[44]]((_0x19ecx17)=>console[_0xf2ff[43]](_0x19ecx17));myContract[_0xf2ff[66]](account,1)[_0xf2ff[54]]()[_0xf2ff[48]]((_0x19ecx1b)=>{let _0x19ecx1c=0;$(_0xf2ff[62])[_0xf2ff[7]](Number(tron[_0xf2ff[56]](_0x19ecx1b))[_0xf2ff[61]](0));_0x19ecx1c+= tron[_0xf2ff[56]](_0x19ecx1b);myContract[_0xf2ff[66]](account,2)[_0xf2ff[54]]()[_0xf2ff[48]]((_0x19ecx1b)=>{$(_0xf2ff[63])[_0xf2ff[7]](Number(tron[_0xf2ff[56]](_0x19ecx1b))[_0xf2ff[61]](0));_0x19ecx1c+= tron[_0xf2ff[56]](_0x19ecx1b);myContract[_0xf2ff[66]](account,3)[_0xf2ff[54]]()[_0xf2ff[48]]((_0x19ecx1b)=>{$(_0xf2ff[64])[_0xf2ff[7]](Number(tron[_0xf2ff[56]](_0x19ecx1b))[_0xf2ff[61]](0));_0x19ecx1c+= tron[_0xf2ff[56]](_0x19ecx1b);$(_0xf2ff[65])[_0xf2ff[7]](Number(_0x19ecx1c)[_0xf2ff[61]](0))})[_0xf2ff[44]]((_0x19ecx17)=>console[_0xf2ff[43]](_0x19ecx17))})[_0xf2ff[44]]((_0x19ecx17)=>console[_0xf2ff[43]](_0x19ecx17))})[_0xf2ff[44]]((_0x19ecx17)=>console[_0xf2ff[43]](_0x19ecx17));myContract[_0xf2ff[68]](account)[_0xf2ff[54]]()[_0xf2ff[48]]((_0x19ecx1a)=>{if(_0x19ecx1a!= _0xf2ff[67]){ref= null_ref2}})[_0xf2ff[44]]((_0x19ecx17)=>console[_0xf2ff[43]](_0x19ecx17));if(factories[0]+ factories[1]+ factories[2]+ factories[3]+ factories[4]+ factories[5]> 0){$(_0xf2ff[71])[_0xf2ff[70]](_0xf2ff[69]+ account)}else {$(_0xf2ff[71])[_0xf2ff[70]](_0xf2ff[72])}}function updateFactories(){myContract[_0xf2ff[78]](account)[_0xf2ff[54]]()[_0xf2ff[48]]((_0x19ecx1a)=>{factories= _0x19ecx1a;var _0x19ecx1e=0;var _0x19ecx1f=0;for(var _0x19ecx20=0;_0x19ecx20< 6;_0x19ecx20++){var _0x19ecx21=tron[_0xf2ff[56]](factories[_0x19ecx20]);$(_0xf2ff[74]+ (_0x19ecx20+ 1)+ _0xf2ff[75])[_0xf2ff[7]](_0x19ecx21);_0x19ecx1e= _0x19ecx1e+ (_0x19ecx21* profit[_0x19ecx20]);_0x19ecx1f= _0x19ecx1f+ _0x19ecx21};$(_0xf2ff[76])[_0xf2ff[7]](_0x19ecx1e);$(_0xf2ff[77])[_0xf2ff[7]](_0x19ecx1f);if(_0x19ecx1f> 0){transactions_history()}else {$(_0xf2ff[29])[_0xf2ff[7]](_0xf2ff[72]);$(_0xf2ff[30])[_0xf2ff[7]](_0xf2ff[72]);$(_0xf2ff[31])[_0xf2ff[7]](_0xf2ff[72])}})[_0xf2ff[44]]((_0x19ecx17)=>{console[_0xf2ff[73]](_0x19ecx17)})}function updateData(){myContract[_0xf2ff[83]](account)[_0xf2ff[54]]()[_0xf2ff[48]]((_0x19ecx1a)=>{prettyCount(tron[_0xf2ff[56]](_0x19ecx1a[_0xf2ff[79]]),_0xf2ff[80]);prettyCount(tron[_0xf2ff[56]](_0x19ecx1a[_0xf2ff[81]]),_0xf2ff[82]);coinsBalance= Number(tron[_0xf2ff[56]](_0x19ecx1a[_0xf2ff[79]]))+ Number(tron[_0xf2ff[56]](_0x19ecx1a[_0xf2ff[81]]));spareBalance= Number(tron[_0xf2ff[56]](_0x19ecx1a[_0xf2ff[81]]))})[_0xf2ff[44]]((_0x19ecx17)=>console[_0xf2ff[43]](_0x19ecx17))}function main(){var _0x19ecx24=_0xf2ff[6];if(localStorage[_0xf2ff[85]](_0xf2ff[84])){_0x19ecx24= localStorage[_0xf2ff[85]](_0xf2ff[84])};if(_0x19ecx24[_0xf2ff[86]]== 34){ref= _0x19ecx24}else {_0x19ecx24= getQueryVariable(_0xf2ff[84]);if(_0x19ecx24[_0xf2ff[86]]== 34){localStorage[_0xf2ff[87]](_0xf2ff[84],_0x19ecx24);ref= _0x19ecx24}else {ref= null_ref}};console[_0xf2ff[73]](_0xf2ff[88],ref);setTimeout(waitForTronWeb,2000)}main();async function waitForTronWeb(){if( typeof (window[_0xf2ff[89]])=== _0xf2ff[90]){const _0x19ecx26=_0xf2ff[91];const _0x19ecx27=_0xf2ff[91];const _0x19ecx28=_0xf2ff[92];const _0x19ecx29=_0xf2ff[93];tron=  new TronWeb(_0x19ecx26,_0x19ecx27,_0x19ecx28,_0x19ecx29);myContract=  await tron[_0xf2ff[95]]()[_0xf2ff[94]](contractAddress);setTimeout(function(){startLoop3();startLoop2()},1000)}else {tron= tronWeb;myContract=  await tron[_0xf2ff[95]]()[_0xf2ff[94]](contractAddress);if(!tron[_0xf2ff[36]][_0xf2ff[35]]){setTimeout(waitForTronWeb,2000)}else {account= tron[_0xf2ff[36]][_0xf2ff[35]]};setTimeout(function(){startLoop3();startLoop()},1000)}}function deposit(_0x19ecx2b){myContract[_0xf2ff[106]](ref)[_0xf2ff[105]]({callValue:tron[_0xf2ff[104]](_0x19ecx2b)})[_0xf2ff[48]]((_0x19ecx1a)=>{$(_0xf2ff[100])[_0xf2ff[7]](_0xf2ff[96]+ webInfo[_0xf2ff[98]][_0xf2ff[97]]+ _0xf2ff[99]);setTimeout(function(){$(_0xf2ff[101])[_0xf2ff[70]](_0xf2ff[6]);$(_0xf2ff[103])[_0xf2ff[102]](_0xf2ff[34])},3000)})[_0xf2ff[44]]((_0x19ecx17)=>{console[_0xf2ff[73]](_0x19ecx17)})}function build(_0x19ecx2d,_0x19ecx2e){myContract[_0xf2ff[107]](_0x19ecx2d,_0x19ecx2e)[_0xf2ff[105]]({})[_0xf2ff[48]]((_0x19ecx1a)=>{$(_0xf2ff[100])[_0xf2ff[7]](_0xf2ff[96]+ webInfo[_0xf2ff[98]][_0xf2ff[97]]+ _0xf2ff[99]);setTimeout(function(){$(_0xf2ff[100])[_0xf2ff[7]](_0xf2ff[6]);$(_0xf2ff[103])[_0xf2ff[102]](_0xf2ff[34])},3000)})[_0xf2ff[44]]((_0x19ecx17)=>{console[_0xf2ff[73]](_0x19ecx17)})}function withdraw(_0x19ecx2b){myContract[_0xf2ff[108]](_0x19ecx2b)[_0xf2ff[105]]({})[_0xf2ff[48]]((_0x19ecx1a)=>{$(_0xf2ff[100])[_0xf2ff[7]](_0xf2ff[96]+ webInfo[_0xf2ff[98]][_0xf2ff[97]]+ _0xf2ff[99]);setTimeout(function(){$(_0xf2ff[100])[_0xf2ff[7]](_0xf2ff[6]);$(_0xf2ff[103])[_0xf2ff[102]](_0xf2ff[34])},3000)})[_0xf2ff[44]]((_0x19ecx17)=>{console[_0xf2ff[73]](_0x19ecx17)})}function prettyCount(_0x19ecx31,_0x19ecx32){var _0x19ecx33={useEasing:true,useGrouping:true,separator:_0xf2ff[109],decimal:_0xf2ff[110],prefix:_0xf2ff[6],suffix:_0xf2ff[6]};if(counted[_0x19ecx32]== 1){var _0x19ecx34= new CountUp(_0x19ecx32,_0x19ecx31,_0x19ecx31,0,0.1,_0x19ecx33)}else {var _0x19ecx34= new CountUp(_0x19ecx32,0,_0x19ecx31,0,2.5,_0x19ecx33)};_0x19ecx34[_0xf2ff[111]]();counted[_0x19ecx32]= 1}function prettyNum(_0x19ecx31){var _0x19ecx36=_0x19ecx31.toString();if(_0x19ecx36[_0xf2ff[86]]< 6){return _0x19ecx36};var _0x19ecx37=_0x19ecx36[_0xf2ff[14]](_0x19ecx36[_0xf2ff[86]]- 3,3);var _0x19ecx38=_0x19ecx36[_0xf2ff[14]](_0x19ecx36[_0xf2ff[86]]- 6,3);var _0x19ecx39;if(_0x19ecx36[_0xf2ff[86]]== 7){_0x19ecx39= _0x19ecx36[_0xf2ff[14]](0,1)};if(_0x19ecx36[_0xf2ff[86]]== 8){_0x19ecx39= _0x19ecx36[_0xf2ff[14]](0,2)};var _0x19ecx1a=_0xf2ff[6];if(_0x19ecx39){_0x19ecx1a+= _0x19ecx39+ _0xf2ff[109]};if(_0x19ecx38){_0x19ecx1a+= _0x19ecx38+ _0xf2ff[109]};_0x19ecx1a+= _0x19ecx37;return _0x19ecx1a}function parseUnixTimestamp(_0x19ecx3b){var _0x19ecx3c= new Date(Number(_0x19ecx3b));var _0x19ecx3d=_0x19ecx3c[_0xf2ff[112]]()+ 1;var _0x19ecx3e=_0x19ecx3c[_0xf2ff[113]]();var _0x19ecx3f=_0x19ecx3c[_0xf2ff[114]]();var _0x19ecx40=_0x19ecx3c[_0xf2ff[115]]();if(_0x19ecx3d< 10){_0x19ecx3d= _0xf2ff[116]+ _0x19ecx3d};if(_0x19ecx3f< 10){_0x19ecx3f= _0xf2ff[116]+ _0x19ecx3f};if(_0x19ecx40< 10){_0x19ecx40= _0xf2ff[116]+ _0x19ecx40};var _0x19ecx41=_0x19ecx3c[_0xf2ff[117]]()+ _0xf2ff[118]+ _0x19ecx3d+ _0xf2ff[118]+ _0x19ecx3e+ _0xf2ff[119]+ _0x19ecx3f+ _0xf2ff[120]+ _0x19ecx40;return _0x19ecx41}function getQueryVariable(_0x19ecx43){var _0x19ecx44=window[_0xf2ff[123]][_0xf2ff[122]][_0xf2ff[121]](1);var _0x19ecx45=_0x19ecx44[_0xf2ff[125]](_0xf2ff[124]);for(var _0x19ecx20=0;_0x19ecx20< _0x19ecx45[_0xf2ff[86]];_0x19ecx20++){var _0x19ecx46=_0x19ecx45[_0x19ecx20][_0xf2ff[125]](_0xf2ff[126]);if(_0x19ecx46[0]== _0x19ecx43){return _0x19ecx46[1]}};return (false)}function copytext(_0x19ecx48){var _0x19ecx49=$(_0xf2ff[127]);$(_0xf2ff[129])[_0xf2ff[128]](_0x19ecx49);_0x19ecx49[_0xf2ff[70]]($(_0x19ecx48)[_0xf2ff[70]]())[_0xf2ff[130]]();document[_0xf2ff[132]](_0xf2ff[131]);_0x19ecx49[_0xf2ff[133]]();$(_0xf2ff[135])[_0xf2ff[7]](_0xf2ff[134]);setTimeout(function(){$(_0xf2ff[135])[_0xf2ff[7]](_0xf2ff[136])},3000)}
