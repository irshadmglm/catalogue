
let bookName = [
    "വിനയം തീർത്ത കർമ വിസ്മയം",
    "അബൂഉബൈദ (റ)",
    "ബീവി ആസിയ (റ)",
    "നഫീസത്തുൽ മിസ്‌രിയ്യ: (റ)",
    "സാറാ ബീവിയും ഹാജറാ ബീവിയും",
    "അജ്മീർ ഖാജാ (റ)",
    "പ്രവാചക പത്നിമാർ",
    "നന്മയുടെ ഉമ്മ റാബിഅത്തുൽ അദവിയ്യ: കെ എച്ച്, കോട്ടപ്പുഴ",
    "ഹസ്റത് ആഇശ; നൂറ് കഥകൾ",
    "ഉമ്മു കുൽസൂം (റ)",
    "അംറ്ബ്നുൽ ആസ് (റ)",
    "മൗലവി കാടേരി മുഹ് അബൽ കമാൽ ഡോ. കെ.എം. ബഹാഉദ്ദീൻ ഹുദവി",
    "ഇമാം അഹ്മദുബ്നു ഹമ്പൽ (റ)",
    "വെളിയംകോട് ഉമർ ഖാളി (റ)",
    "മൗലാനാ അബ്ദുറഹ്മാൻ ഫദ്ഫരി കുട്ടി മുസ്ലിയാർ",
    "സ്വഹാബികൾ ചരിത്ര ക്വിസ്",
    "ഇസ്ലാമിക ഭരണം",
    "അറിവ് തണലൊരുക്കിയ കാലം",
    "ചരിത്രങ്ങളും കറാമത്തുകളും",
    "പാങ്ങിൽ അഹ്മദ് കുട്ടി മുജീയാർ",
    "മഹാന്മാരുടെ മഹനീയ ജീവിതം",
    "നൂർ",
    "അല്ലഫൽ അലിഫ്",
    "ദാവൂദും താബൂത്തും",
    "മർയമിന്റെ മകൻ",
    "മരണത്തിന്റെ താഴ്വരകൾ",
    "ഹുദ് ഹുദ് പറഞ്ഞ കഥ",
    "സിനായുടെ സന്ദേശം",
    "തീ കടൽ കടന്ന ത്യാഗം",
    "നീനവായിലെ വെളിച്ചം",
    "സ്വർഗത്തിലെ ഒട്ടകം",
    "മുന്നു നക്ഷത്രങ്ങൾ",
    "പിതാവും പുത്രന്മാരും",
    "തഅ്ലീമുൽ മുഅല്ലിം",
    "അബ്ബാസിയ ഭരണം",
    "നരഗത്തിലെ വിശേഷണങ്ങൾ",
    "ഖത്വീബിന്റെ ഡയറി",
    "സൽമാനുൽ ഫാരിസി (റ) ചരിത്രം",
    "മരണാനുബന്ധ മുറകൾ",
    "ഇമാം സുയൂഥി (റ)",
    "ഇമാം അബൂ ഹനീഫ (റ)",
    "പ്രഭാത ജീവിതവും അന്ത്യപ്രഭാഷണവും",
    "മരുഭൂവിലെ മഞ്ഞുതുള്ളി",
    "മിഹ്റാബിലെ കന്യക",
    "ഉമ്മു ഐമൻ (റ)",
    "സകാതും നോമ്പും",
    "നാഗൂർ സുൽത്വാൻ",
    "അൽഭുത വ്യക്തിത്വങ്ങൾ",
    "101 സൂഫി കഥകൾ",
    "ഇമാം ബുഖാരി"
];
let limit = bookName.length;

function createDiv(i){
    let main = document.getElementsByTagName('main')[0];
    let div1 = document.createElement('div');
    div1.className = "book";
    
    let div2 = document.createElement('div');
    div2.className = "number";
    let h4 = document.createElement('h4');
    h4.innerHTML= i+1;
    div2.appendChild(h4);
    // h4.style.color
    div1.appendChild(div2);
    
    let div3 = document.createElement('div');
    div3.className = "title";
    div3.innerHTML = bookName[i];
    div1.appendChild(div3);
    main.appendChild(div1);
}
for(let i =0; i<limit; i++){
    createDiv(i);
}

const resultBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = bookName.filter((keyword)=>{
            return keyword.includes(input);
        });
        console.log(result);
    }
    display(result);
    if(!result.length){
        resultBox.innerHTML = '';
    }
}

function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });

    resultBox.innerHTML = "<ul>" + content.join('') + "</ul>"
}

function selectInput(list){
 inputBox.value = list.innerHTML;
 resultBox.innerHTML = '';
}