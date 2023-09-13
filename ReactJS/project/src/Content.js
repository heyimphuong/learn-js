import { useCallback, useEffect, useState } from 'react'

const memories = [];

function Content() {
    const tabs = ['posts', 'comments', 'albums']
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('comments')

    useEffect(() => {
        document.title = title
    })

    const handleCheck = useCallback(() => {
        console.log({ title })
        setPosts([{ id: '0', body: 'Phuong' }, ...posts])
    }, [posts])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(res => res.json())
            .then(resPosts => setPosts(resPosts))
    }, [])

    console.log({ renderPosts: posts });

    return (
        <div>
            <button onClick={handleCheck}>Add post</button>
            {tabs.map(tab => (
                <button
                    key={tab}
                    style={type === tab ? {
                        color: '#fff',
                        backgroundColor: '#333',
                    } : {}}
                    onClick={() => setType(tab)}
                >
                    {tab}
                </button>
            ))}
            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <ul>
                {posts.map((comment, idx) => (
                    <li key={idx}>{comment.body}</li>
                ))}
            </ul>
        </div>

    )
}

export default Content