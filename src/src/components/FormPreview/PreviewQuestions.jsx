import Builder from '../../appHelpers/Builder'

export const PreviewQuestions = ({ form }) => {
    return (
        <>
            {form?.components?.map((content, id) => (
                <div key={id}>
                    {Builder({content, id, isPreview:true})}
                </div>
            ))}
        </>
    )
}
