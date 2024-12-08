<Routes>
<Route path="*" element={<PaginaPadrao />}>
    <Route index element={
        <PostModelo fotoCapa={`/assets/posts/${post.id}/capa.png`} titulo={post.titulo}>
            <div className="post-markdown-container">
                <Markdown>
                    {post.texto}
                </Markdown>
            </div>
            <h2 className={styles.tituloOutrosPosts}>
                Outros posts que você pode gostar:
            </h2>
            <ul className='posts'>
                {
                    postsRecomendados.map((post) => {
                        return (
                            <li key={post.id}>
                                <PostCard post={post} />
                            </li>
                        )
                    })}
            </ul>
        </PostModelo>
    }>
    </Route>
</Route>
</Routes>