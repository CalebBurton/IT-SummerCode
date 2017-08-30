/*
    RECEIVE FILES IN GOOGLE DRIVE
    - - - - - - - - - - - - - - -    
*/

/*
function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('forms.html').setTitle("Google File Upload");
}
*/

function doGet(request) {
  return HtmlService.createTemplateFromFile('photoForm')
      .evaluate();
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}


function uploadFileToGoogleDrive(data, file, name) {
  Logger.log('new photo uploading');
  var newFileName = name + file.substring(file.length, file.length - 4);
  
  try {
    
    var dropbox = "TestPhotoUpload";
    var folder, folders = DriveApp.getFoldersByName(dropbox);
    var fileList;
    
    if (folders.hasNext()) {
      folder = folders.next();
      
      fileList = folder.getFilesByName(newFileName);
      
      // Check if a file with that name already exists
      if (fileList.hasNext()) {
        var duplicateFile = fileList.next();
        // If so, remove it
        folder.removeFile(duplicateFile);
      }
      
    } else {
      folder = DriveApp.createFolder(dropbox);
    }
    
    
    var contentType = data.substring(5,data.indexOf(';')),
        bytes = Utilities.base64Decode(data.substr(data.indexOf('base64,')+7)),
        blob = Utilities.newBlob(bytes, contentType, newFileName),
        file = folder.createFile(blob);
    
    return "OK";
    
  } catch (f) {
    return f.toString();
  }
  
}