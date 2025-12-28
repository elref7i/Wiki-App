import { pgTable,serial,text,timestamp,boolean, integer } from "drizzle-orm/pg-core";
import{usersSync} from "drizzle-orm/neon";
import { count } from "console";

//pgTable => create table
//serial => auto increment
//text => varchar
//timestamp => date
//boolean => true or false
//references => foreign key
//usersSync => create table

export const articles = pgTable("articles",{
    id:serial("id").primaryKey(),
    title:text("title").notNull(),
    content:text("content").notNull(),
    imageUrl:text("image_url"),
    createdAt:timestamp("created_at",{mode:"string"}).notNull().defaultNow(),
    count:integer("count").notNull().default(0),
    updatedAt:timestamp("updated_at",{mode:"string"}).notNull().defaultNow(),
    published:boolean("published").notNull().default(false),
    authorId:serial("user_id").notNull().references(()=>usersSync.id),
    
})

const schema = {articles};

export default schema;

export type articles= typeof articles.$inferSelect;
export type newArticles= typeof articles.$inferInsert;