<script>
function shareSection(id) {
    const url = window.location.origin + window.location.pathname + '#' + id;
    
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(() => {
            showCopied(event.target);
        }).catch(() => {
            fallbackCopy(url, event.target);
        });
    } else {
        fallbackCopy(url, event.target);
    }
}

function fallbackCopy(text, btn) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
        document.execCommand('copy');
        showCopied(btn);
    } catch (e) {
        alert('Link: ' + text);
    }
    document.body.removeChild(textarea);
}

function showCopied(btn) {
    const originalText = btn.textContent;
    btn.textContent = '✓ Copied!';
    btn.classList.add('copied');
    setTimeout(() => {
        btn.textContent = originalText;
        btn.classList.remove('copied');
    }, 2000);
}

// Scroll to hash on load
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.hash) {
        const target = document.querySelector(window.location.hash);
        if (target) {
            setTimeout(() => {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                target.style.animation = 'highlight 2s ease-out';
            }, 100);
        }
    }
});
</script>
