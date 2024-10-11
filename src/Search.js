import React, {useState} from 'react';

const posts =[
 {   id:1,
    title:'post grid 1',
    content: 'todays session is about react',
    dateRelease: 'occt-10-2024'


},
{   id:2,
    title:'kames charles',
    content: 'todays session is about javascript',
    dateRelease: 'occt-1-2023'


},
{   id:3,
    title:'posters grids 2',
    content: 'tomwprrow sessions are about several things',
    dateRelease: 'occt-15-2024'


},
{   id:4,
    title:'dorlen',
    content: 'hello my name is jojo',
    dateRelease: 'occt-16-2023'


},
];
const highlight = (text,query)=>{
    if(!query) return text;
    const regex = new RegExp ('${query}','gi');
    return text.split(regex).map((part,index)=>part.toLowerCase()=== query.toLowerCase() ? <mark key ={index}></mark>:part );
};
const Search =()=>{
    const [searchTerm, setSearchTerm]=useState('');
        const handleSearch =(e)=>{
            setSearchTerm(e.target.value);
        };
        const filteredposts = posts.filter(
            (post)=>
                post.title.toLowerCase().includes(searchTerm.toLowerCase())||
            post.content.toLowerCase().includes(searchTerm.toLowerCase())
        );
        return(
            <div>
                <h1>
                    Search Here
                </h1>
                <input type="text"
                placeholder="Search for posts"
                value={searchTerm}
                onChange={handleSearch} />
                <p>{filteredposts.length} posts were found</p>
                {filteredposts.map((post)=>(
                    <div key={post.id}>
                        <h2>{highlight(post.title,searchTerm)}</h2>
                        <p>{highlight(post.content,searchTerm)}</p>
                        <small>{post.date}</small>
                        </div>

                ))}

            </div>
        )
    }
    
    export default Search;