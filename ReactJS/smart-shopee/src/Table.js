export const Table = ({ alinks }) => {
    return (
        <table>
            <tbody>
                {alinks.map(link => (
                    <tr>
                        <td>{link}</td>
                        <td>TC</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}