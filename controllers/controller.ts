import { User } from '../models/index.ts';

class Controller {
  static async getRootHandler(ctx: any) {
    let result = await User.all();
    ctx.response.body = result;
  }
}

export default Controller;
