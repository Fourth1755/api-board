import { PartialType } from '@nestjs/mapped-types';
import { CreateBlogDto } from './create-blog.dto';

export class UpdateBlogDto extends PartialType(CreateBlogDto) {
    id:number;
    name: string;
    detail: string;
    community_id: number;
    community: string;
    user_id: number;
    user_name: string;
    user_image: string;
    comment: string;
}
