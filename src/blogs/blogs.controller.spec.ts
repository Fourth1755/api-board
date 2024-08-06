import { Test, TestingModule } from '@nestjs/testing';
import { BlogsController } from './blogs.controller';
import { BlogsService } from './blogs.service';

describe('BlogsController', () => {
  let controller: BlogsController;
  let service: BlogsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlogsController],
      providers: [BlogsService],
    }).compile();

    controller = module.get<BlogsController>(BlogsController);
    service = module.get<BlogsService>(BlogsService)
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of blogs', async () => {
      const expectResult = [
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
        }
      ];
      jest.spyOn(service, 'findAll').mockImplementation(() => expectResult);

      const result = await controller.findAll();

      expect(result).toBe(expectResult);
    });
  });

  describe('findOne', () => {
    it('should return a blog', async () => {
      
      const expectResult = {
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
        };
      jest.spyOn(service, 'findOne').mockImplementation(() => expectResult);

      const result = await controller.findOne("1")

      expect(result).toBe(expectResult);
    });
  });

  describe('create', () => {
    it('should return a create success', async () => {
      const blog = {
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
        };
      jest.spyOn(service, 'create').mockImplementation(() => 'This action adds a new blog');
      
      const result = await controller.create(blog) 
      
      expect(result).toBe("This action adds a new blog");
    });
  });

  describe('update', () => {
    it('should return a update blog success', async () => {
      const blog = {
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
        };
      jest.spyOn(service, 'update').mockImplementation(() => 'Update blog 1 success.');
      
      const result = await controller.update("1",blog) 
      
      expect(result).toBe("Update blog 1 success.");
    });
  });

  describe('delete', () => {
    it('should return a delete blog success', async () => {
      jest.spyOn(service, 'remove').mockImplementation(() => 'Delete blog 1 success.');
      
      const result = await controller.remove("1") 
      
      expect(result).toBe("Delete blog 1 success.");
    });
  });

  describe('findByUserId', () => {
    it('should return an array of blogs', async () => {
      const expectResult = [
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
        }
      ];
      jest.spyOn(service, 'findByUserId').mockImplementation(() => expectResult);

      const result = await controller.findByUserId("1");

      expect(result).toBe(expectResult);
    });
  });
});
