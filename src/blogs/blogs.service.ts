import { Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';

interface BlogData {
  id: number;
  name: string;
  detail: string;
  community_id: number;
  community: string;
  user_id: number;
  user_name: string;
  user_image: string;
  comment: string;
};

@Injectable()
export class BlogsService {
  blogLsit: BlogData[] = [
    {
      id: 1,
      name: "The Beginning of the End of the World",
      detail:
        "The afterlife sitcom The Good Place comes to its culmination, the show’s two protagonists, Eleanor and Chidi, contemplate their future. Having lived thousands upon thousands of lifetimes together, and having experienced virtually everything this life has to offer, they are weary. It is time for it all to end. The show’s solution to this perpetual happiness-cum-weariness is extinction. When you have ",
      community_id: 1,
      community: "History",
      user_id: 1,
      user_name: "Alisa Mikhailovna",
      user_image: "https://cdn.myanimelist.net/images/characters/5/536830.jpg",
      comment: "",
    },
    {
      id: 2,
      name: "The Beginning of the End of the World",
      detail:
        "The afterlife sitcom The Good Place comes to its culmination, the show’s two protagonists, Eleanor and Chidi, contemplate their future. Having lived thousands upon thousands of lifetimes together, and having experienced virtually everything this life has to offer, they are weary. It is time for it all to end. The show’s solution to this perpetual happiness-cum-weariness is extinction. When you have ",
      community_id: 3,
      community: "Pets",
      user_id: 1,
      user_name: "Alisa Mikhailovna",
      user_image: "https://cdn.myanimelist.net/images/characters/5/536830.jpg",
      comment: "",
    },
  ];
  create(createBlogDto: CreateBlogDto) {
    const lastBlog = this.blogLsit.at(this.blogLsit.length-1)
    createBlogDto.id = lastBlog.id+1
    this.blogLsit.push(createBlogDto)
    return 'This action adds a new blog';
  }

  findAll() {
    return this.blogLsit;
  }

  findOne(id: number) {
    return this.blogLsit.filter(item=>item.id=id).pop();
  }

  update(id: number, updateBlogDto: UpdateBlogDto) {
    this.blogLsit =this.blogLsit.map((item)=>{
      if(item.id==id){
        return updateBlogDto
      }
      return item
    })
    return `This action updates a #${id} blog`;
  }

  remove(id: number) {
    this.blogLsit = this.blogLsit.filter(item=>item.id!=id)
    return `Delete blog ${id} success.`;
  }

  findByUserId(id: number){
    //const ourBlog = this.blogLsit.filter(item=>item.user_id==id)
    return this.blogLsit.filter(item=>item.user_id==id)
  }
}
