const highlightText = (text, search) => {
    if (!search) return text;
    const regex = new RegExp(`(${search})`, 'gi'); 
    return text.replace(regex, '<mark>$1</mark>'); 
};

export default highlightText;