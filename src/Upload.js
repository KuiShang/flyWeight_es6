/**
 * Created by shangkuikui on 2017/4/28.
 */
import UploadManager from './UploadManager';
 export default class Upload{
    constructor(uploadtype){
        this.uploadtype = uploadtype
    }
    delFile(id){
        UploadManager.setExternalState( id, this );
        if ( this.fileSize < 3000 ){
            return this.dom.parentNode.removeChild( this.dom );
        }
        if ( window.confirm( '确定要删除该文件吗? ' + this.fileName ) ){
            return this.dom.parentNode.removeChild( this.dom );
        }
    }
}
