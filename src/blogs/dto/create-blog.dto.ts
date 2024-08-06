export class CreateBlogDto {
    id: number;
    name: string;
    detail: string;
    community_id: number;
    community: string;
    user_id: number;
    user_name: string;
    user_image: string;
    comment: string;
}
