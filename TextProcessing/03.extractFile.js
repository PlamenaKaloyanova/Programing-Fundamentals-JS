function demo(text) {

  let textName=text.split("\\").pop()  
  let lastIndex=textName.lastIndexOf(".");
  let extension=textName.substring(lastIndex+1);
  let fileName=textName.substring(0,lastIndex);
  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${extension}`)

}
