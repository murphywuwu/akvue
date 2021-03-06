
import { core ,ioc,vue } from "ak-lib-sys/src";
import { BaseCol, IBaseColConfig} from "../basecol";


export interface IDetailColConfig extends IBaseColConfig{
   
}




@ioc.PlugIn({RegName:"DetailCol",BaseType:"BaseCol",Doc:"详情控件"})
export   class DetailCol extends BaseCol {

      constructor (config?: IDetailColConfig){
          super(config);
      }

      protected pGetDataText(){
        let _str =  super.pGetDataText();
        if(!_str)  _str = this.pGetDataValue();
        return _str ;
      }

      
}