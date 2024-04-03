document.addEventListener('DOMContentLoaded', function() {
    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };
    var parameterValue = getUrlParameter('condition').toLowerCase();
    switch(parameterValue){
        case 'wordpress':
            document.getElementById('wix').classList.add('hidden');
            document.getElementById('wordpress').classList.remove('hidden');
            document.getElementById('squarespace').classList.add('hidden');
            break;
        case 'squarespace':
            document.getElementById('wix').classList.add('hidden');
            document.getElementById('wordpress').classList.add('hidden');
            document.getElementById('squarespace').classList.remove('hidden');
            break;
        case 'wix':
            document.getElementById('wix').classList.remove('hidden');
            document.getElementById('wordpress').classList.add('hidden');
            document.getElementById('squarespace').classList.add('hidden');
            break;
        default:
            document.getElementById('wix').classList.remove('hidden');
            document.getElementById('wordpress').classList.remove('hidden');
            document.getElementById('squarespace').classList.remove('hidden');
    }
});
