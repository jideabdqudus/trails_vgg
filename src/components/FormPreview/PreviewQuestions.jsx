import Builder from '../../appHelpers/Builder'

export const PreviewQuestions = ({ form }) => {
    return (
        <>
            {form?.components?.map((content, id) => (
                    Builder({content, id, isPreview:true})
            ))}
        </>
    )
}
 