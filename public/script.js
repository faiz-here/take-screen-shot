window.onload = function() {
    setInterval(() => {
        html2canvas(document.body).then(canvas => {
            const link = document.createElement('a');
            link.href = canvas.toDataURL('image/png'); 
            link.download = `screenshot-${new Date().toISOString()}.png`; 
            document.body.appendChild(link);
            link.click(); 
            document.body.removeChild(link); 
        }).catch(err => {
            console.error('Screenshot capture failed: ', err);
        });
    }, 2000); 
};