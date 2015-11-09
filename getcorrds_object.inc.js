/**
*  This scripts exports selected elements name, position and dimension.
*  Tested under Adobe InDesign CS6, CC, CC 2014 under OS X
*/

function buildList() {
  if (app.documents.length === 0) {
    alert('No active document!');
    return null;
  }
  if (app.name === 'Adobe InDesign') {
    app.activeDocument.viewPreferences.rulerOrigin = RulerOrigin.PAGE_ORIGIN;
  } else if ( app.name !== 'Adobe Illustrator') {
    alert('Wrong app name: ' + app.name);
    return null;
  }

  obj = {}; // output list
  selectedObjects = app.selection;

  for ( var i = 0; i < selectedObjects.length; i++) {

    // Output is tab separated: name left top width height

    if (app.name.toUpperCase() === 'ADOBE INDESIGN') {
      height = selectedObjects[i].geometricBounds[2] - selectedObjects[i].geometricBounds[0];
      width = selectedObjects[i].geometricBounds[3] - selectedObjects[i].geometricBounds[1];
      left = selectedObjects[i].geometricBounds[1];
      top = selectedObjects[i].geometricBounds[0];
    } else {
      width = selectedObjects[i].geometricBounds[2] - selectedObjects[i].geometricBounds[0];
      height = -selectedObjects[i].geometricBounds[3] + selectedObjects[i].geometricBounds[1];
      top = -selectedObjects[i].geometricBounds[1];
      left = selectedObjects[i].geometricBounds[0];
    }

    newItem = {
        name : selectedObjects[i].name,
        left : left,
         top : top, 
       width : width,
      height : height };
    obj[selectedObjects[i].name] = newItem;
  }

  return obj;
}

function saveList(obj) {

  if (null === obj) {
    return;
  }
  if ({} == obj) {
    alert('No elements selected')
    return;
  }
  defaultFile = new File (Folder.myDocuments+"/"+app.activeDocument.name.replace(/\.(indd|ai|pdf|svg)$/i, '')+".json");
  if (File.fs === "Windows") {
    writeFile = defaultFile.saveDlg( 'Save object list', "JSON file:*.json;All files:*.*");
  } else {
    writeFile = defaultFile.saveDlg( 'Save object list');
  }

  if (writeFile !== null) {
    if (writeFile.open("w")) {
      writeFile.encoding = "utf8";
      writeFile.write(JSON.stringify(obj));
      writeFile.close();
    }
  }
}

saveList(buildList ());