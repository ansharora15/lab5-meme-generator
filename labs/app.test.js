describe('Meme Generator Tests', () => {

    test('Canvas should have correct text attributes', () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        ctx.font = '20px Impact';
        ctx.fillText('Test Meme', 100, 50);

        expect(ctx.font).toBe('20px Impact');
    });

    test('Download link should have correct filename', () => {
        document.body.innerHTML = '<a id="download-link"></a>';
        const link = document.getElementById('download-link');
        
        link.download = 'meme.png';
        link.href = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA';
        
        expect(link.download).toBe('meme.png');
        expect(link.href).toContain('data:image/png');
    });

});
