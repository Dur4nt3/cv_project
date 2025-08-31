import ProjectDescription from './ProjectDescription';
import ProjectsErrorNotice from './ProjectsErrorNotice';

export default function ProjectSegment({
    theme,
    itemId,
    projects,
    stateUpdater,
    updateProjects,
    addDescriptionBullets,
    removeDescriptionBullets,
    errors,
    setPreviewStatus,
}) {
    const projectsItem = projects[itemId];

    return (
        <div className='projects-segment' id={itemId}>
            <h3 className='projects-segment-heading'>
                Project {itemId.slice(3)}
            </h3>

            {errors !== null && errors !== undefined && (
                <ProjectsErrorNotice errors={errors} />
            )}

            {Object.keys(projectsItem).map((key) => {
                if (key === 'description') {
                    return (
                        <ProjectDescription
                            key={itemId}
                            description={projectsItem[key]}
                            itemId={itemId}
                            theme={theme}
                            state={projects}
                            stateUpdater={stateUpdater}
                            addDescriptionBullets={addDescriptionBullets}
                            removeDescriptionBullets={removeDescriptionBullets}
                            updateProjects={updateProjects}
                            setPreviewStatus={setPreviewStatus}
                        />
                    );
                }

                const labels = {
                    name: 'Project Name',
                    link: 'Project Link',
                };

                const placeholders = {
                    name: 'E.g., Example Project',
                    link: 'E.g., https://www.myportfolio/myproject',
                };

                return (
                    <div className='form-row' key={key}>
                        <label className='form-label'>
                            {labels[key]}
                            <span className='required-indicator'>*</span>
                        </label>
                        <input
                            className='form-input'
                            type='text'
                            required={true}
                            value={projectsItem[key]}
                            onChange={(event) =>
                                updateProjects(
                                    event,
                                    itemId,
                                    key,
                                    projects,
                                    stateUpdater,
                                    setPreviewStatus
                                )
                            }
                            placeholder={placeholders[key]}
                        />
                    </div>
                );
            })}
        </div>
    );
}
