/**
 * Created by shangkuikui on 2017/4/28.
 */
import UploadFactory from './UploadFactory'
let outerstate = {};
export default   {
    add(id, uploadtype, fileName, fileSize){
        let uploadObj = UploadFactory.create(uploadtype);
        let dom = document.createElement('div');
        dom.innerHTML =
            `<span>文件名称:${fileName}, 文件大小: ${fileSize} </span>
                    <button class="delFile">删除</button>`;
        dom.querySelector('.delFile').onclick = function () {
            uploadObj.delFile(id);
        }
        document.body.appendChild(dom);
        outerstate[id] = {
            fileName: fileName,
            fileSize: fileSize,
            dom: dom
        };
    },
    setExternalState: function (id, flyWeightObj) {
        let uploadData = outerstate[id];
        for (let i in uploadData) {
            flyWeightObj[i] = uploadData[i];
        }
    }
}
