import { useState, useEffect } from "react";
import { List, ListItem, Typography } from "@mui/material";
import AddPostButton from "./AddPostButton";
import { Link, useLocation } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import PublicIcon from "@mui/icons-material/Public";
import PublicOffIcon from "@mui/icons-material/PublicOff"
import { toast } from "react-toastify";


export default function BlogList() {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || []
        
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setBlogs(storedBlogs)
    }, []);

    const location = useLocation();

    const handleTogglePublic = (index) => {
        const updatedBlogs = [...blogs];
        updatedBlogs[index].isPublic = !updatedBlogs[index].isPublic;
        localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
        setBlogs(updatedBlogs);

        if(updatedBlogs[index].isPublic === true) {
            toast.success("Post is Public");
        } else {
            toast.success("Post is Private");
        }
    }

    const handleDelete = (index) => {
        const updatedBlogs = blogs.filter((_, i) => {
            return i !== index;
        })
        localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
        setBlogs(updatedBlogs);
        toast.success("Post Deleted Successfully");
    }

    return(
        <div style={{width: '100%'}}>
            {location.pathname !== "/" &&(
                <Typography variant="h1" gutterBottom sx={{marginTop: '100px', textAlign: 'center', color: '#212121', fontSize: '40px'}}>
                    Blog List
                </Typography>
            )}
            <AddPostButton />
            <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                <List sx={{color: 'white', fontSize: '10px', width: '50%'}}>
                    {blogs.map((blog, index) => (
                        <ListItem key={index} sx={{background: '#8bc34a', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '10px', mb: 3, boxShadow: 6}}>
                            <Typography component="span">
                                {blog.title}<br></br>{blog.content} - {blog.isPublic ? <PublicIcon sx={{width: '15px', height: '15px', borderRadius: '50%', backgroundColor: 'green', position: 'relative', top: '3px'}} /> : <PublicOffIcon sx={{width: '15px', height: '15px', borderRadius: '50%', backgroundColor: 'red', position: 'relative', top: '3px'}} />}
                            </Typography>

                            <div>
                                <Link to={`/blog/${index}`}>
                                    <EditIcon style={{background: '#2196f3', color: 'white', padding: '5px', margin: '20px 10px 10px 10px', width: '30px', height: '30px', borderRadius: '50%'}} />
                                </Link>
                                <Link>
                                    <DeleteForeverIcon onClick={() => {handleDelete(index)}} style={{background: '#f44336', color: 'white', padding: '5px', margin: '20px 10px 10px 10px', width: '30px', height: '30px', borderRadius: '50%'}} />
                                </Link>
                                <Link>
                                    {blog.isPublic ? <PublicOffIcon onClick={() => {handleTogglePublic(index)}} style={{background: '#28a745', color: 'white', padding: '5px', margin: '20px 10px 10px 10px', width: '30px', height: '30px', borderRadius: '50%'}} /> : <PublicIcon onClick={() => {handleTogglePublic(index)}} style={{background: '#20c997', color: 'white', padding: '5px', margin: '20px 10px 10px 10px', width: '30px', height: '30px', borderRadius: '50%'}} /> }
                                </Link>
                            </div>
                        </ListItem>
                    ))}
                </List>
            </div>
        </div>
    );
}