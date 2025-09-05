const elemProjects = document.getElementById('project__content');

const createImage = (projectImage) => {
      const elemPicture = document.createElement('picture')
    const elemImage = document.createElement('img')

    elemImage.setAttribute('src', projectImage)

    elemPicture.appendChild(elemImage)

    return elemPicture 
}

const createStrong = (projectName) => {
    const elemStrong = document.createElement('strong')
    elemStrong.innerText = projectName

    return elemStrong
}

const createTags = (projectTags) => {
    const elemTags = document.createElement('div')

    projectTags.forEach(tag => {
      const elemTag = document.createElement('span')
      elemTag.innerText = tag

      elemTags.appendChild(elemTag)
    })

    return elemTags

}

const createProject = (project) => {
      const elemProject = document.createElement('a')

    elemProject.setAttribute('href', project.link)
    elemProject.setAttribute('target', '_blank')

    elemProject.classList.add('project')

    //Add picture 
    elemProject.appendChild(createImage(project.image))

    //Add strong
    elemProject.appendChild(createStrong(project.name))

    // Add tags 
    elemProject.appendChild(createTags(project.tags));

    return elemProject
}

const loadProjects = (projects) => {
  projects.forEach(project => {
    elemProjects.appendChild(createProject(project));
  });
}

fetch('./projects.json').then(response => response.json()).then(loadProjects);