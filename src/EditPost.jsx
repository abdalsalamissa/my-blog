import { useParams } from "react-router-dom";
import { TextField, Button, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function EditPost() {

    const {id} = useParams();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [isPublic, setIsPublic] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
        const blog = storedBlogs[id];
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setTitle(blog.title);
        setContent(blog.content);
        setIsPublic(blog.isPublic);
    }, [id]);

    const handleSubmit = (e) =>{
        e.preventDefault();

        const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
        storedBlogs[id] = {title, content, isPublic};
        localStorage.setItem("blogs", JSON.stringify(storedBlogs));
        
        navigate("/blogs");
        
        toast.success("Post Updated successfully");
    }

    return(
        <Box component='form' onSubmit={handleSubmit} sx={{mt: 3, width: '30%', position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}>
            <TextField label='Title' value={title} onChange={(e) => {setTitle(e.target.value)}} fullWidth sx={{mb: 2}} />

            <TextField label='Content' value={content} onChange={(e) => {setContent(e.target.value)}} fullWidth multiline rows={4} sx={{mb: 2}} />

            <Button type="submit" variant="contained" sx={{width: '100px', position: 'absolute', left: '50%', transform: 'translate(-50%)', top: '100%'}}>
                Save
            </Button>
        </Box>
    );
}