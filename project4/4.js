const selectFontSize = document.getElementById("selectFontSize");
const selectBgColor = document.getElementById("selectBgColor");
const resetButton = document.getElementById("resetButton");
const mainElement = document.querySelector("main");

// change font size 
const changeFontSize = (event) =>{
  const selectedFontSize =event.target.value
  mainElement.style.fontSize = selectedFontSize;
  localStorage.setItem("fontSize",selectedFontSize);
}

// change background color
const changeBgColor = (event) =>{
  const selectedBackgroundColor =event.target.value 
  mainElement.style.backgroundColor = selectedBackgroundColor;
  localStorage.setItem("bgColor", selectedBackgroundColor);
}

const setValues = (fontSize1, bgColor1) =>{
    selectFontSize.value = fontSize1;
    selectBgColor.value = bgColor1;
    mainElement.style.fontSize = fontSize1;
    mainElement.style.backgroundColor = bgColor1;
}

// load LocalStorage Value
const initialSetup = () =>{
  const fontSize1 = localStorage.getItem("fontSize");
  const bgColor1 = localStorage.getItem("bgColor");

  if(bgColor1 && fontSize1){
    setValues(fontSize1,bgColor1);
  }

  if(!bgColor1 && !fontSize1){
   setValues( "16px", "aqua");
  }

  if(!bgColor1 && fontSize1){
   setValues( fontSize1, "aqua");
  }

  if(bgColor1 && !fontSize1){
    setValues( "16px", bgColor1);
   }
}

// clearLocalStorage
const clearLocalStorage = ()=>{
  localStorage.removeItem("fontSize");
  localStorage.removeItem("bgColor");
  setValues("16px", "aqua");
}

// add even listener s

selectFontSize.addEventListener("change",changeFontSize);
selectBgColor.addEventListener("change",changeBgColor);
resetButton.addEventListener("click",clearLocalStorage);

initialSetup();