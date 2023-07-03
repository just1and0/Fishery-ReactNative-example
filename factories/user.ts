// factories/user.ts
import { Factory } from 'fishery';  

type User = {
  firstName: string,
  lastName: string
}

const userFactory = Factory.define<User>(({ sequence }) => ({
  id: sequence,
  firstName: 'Tobi', 
  lastName: 'Shokunbi'
}));

 
export default userFactory