/**
 * Created by shangkuikui on 2017/4/28.
 */
import UploadManager  from  './UploadManager';

let id = 0;
let startUpload = function (uploadtype, files) {
    for ( let i = 0, file; file = files[ i++ ]; ){
        UploadManager.add(++id,uploadtype,file.fileName,file.fileSize);
    }
}

startUpload( 'plugin', [
    {
        fileName: '1.txt',
        fileSize: 1000
    },
    {
        fileName: '2.html',
        fileSize: 3000
    },
    {
        fileName: '3.txt',
        fileSize: 5000
    }
]);
startUpload( 'flash', [
    {
        fileName: '4.txt',
        fileSize: 1000
    },
    {
        fileName: '5.html',
        fileSize: 3000
    },
    {
        fileName: '6.txt',
        fileSize: 5000
    }
]);