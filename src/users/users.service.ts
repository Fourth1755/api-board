import { Injectable } from '@nestjs/common';

interface User {
  id: number,
  name: string,
  image: string,
  email: string
}

@Injectable()
export class UsersService {
  userList: User[] = [
    {
      id: 1,
      name: "Alisa Mikhailovna",
      image: "https://cdn.myanimelist.net/images/characters/5/536830.jpg",
      email: "alisa@gmail.com"
    },
    {
      id: 2,
      name: "Masachika Kuze",
      image: "https://cdn.myanimelist.net/images/characters/4/536831.jpg",
      email: "masachika@gmail.com"
    }]

  findByEmail(email: string) {
    const user = this.userList.filter((item)=>item.email==email)
    if(user.length==0){
      return null
    }
    return user.pop();
  }

}
