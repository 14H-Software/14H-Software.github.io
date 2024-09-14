var Profiler = (function () {

    function ByID(elid) {
        if (!elid) {
            return false;
        }
        return document.getElementById(elid);
    }

    function AddSnippets(title, content, container) {
        // Get the template content
        const template = document.getElementById('custom-snippet').content.cloneNode(true);
            
        // Modify the template content
        template.querySelector('.title').textContent = title;
        template.querySelector('.content').textContent = content;

        // Append the rendered snippet to the container
        ByID(container).appendChild(template);
    }





    return {



    };
})();