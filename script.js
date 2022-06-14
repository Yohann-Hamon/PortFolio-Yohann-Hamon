// get theme buttons
const devButton = document.querySelector('.dev')
const uiUxButton = document.querySelector('.ui-ux')
const editorButton = document.querySelector('.editor')

// get differents window
const devWindow = document.querySelector('.dev-window')
const uiUxWindow = document.querySelector('.ui-ux-window')
const editorWindow = document.querySelector('.editor-window')

devButton.addEventListener('click', () =>
{
    devWindow.style.display = "block"
    uiUxWindow.style.display = "none"
    editorWindow.style.display = "none"
})

uiUxButton.addEventListener('click', () =>
{
    devWindow.style.display = "none"
    uiUxWindow.style.display = "block"
    editorWindow.style.display = "none"
})

editorButton.addEventListener('click', () =>
{
    devWindow.style.display = "none"
    uiUxWindow.style.display = "none"
    editorWindow.style.display = "block"
})