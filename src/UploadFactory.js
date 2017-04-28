/**
 * Created by shangkuikui on 2017/4/28.
 */
import Upload from './Upload'
let createdFlyWeightObjs = {};
export default {
    create(uploadtype) {
        if (createdFlyWeightObjs[uploadtype]) {
            return createdFlyWeightObjs[uploadtype]
        }
        return createdFlyWeightObjs[uploadtype] = new Upload(uploadtype);
    }
}
