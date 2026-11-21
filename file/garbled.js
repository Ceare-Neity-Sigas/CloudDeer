function garbledProcess(text)
{
    res=""
    for (let i=0;i<text.length;i++)
    {
        if (isUpperCaseLetter(text[i])) res+=String.fromCharCode(randint(65,90));
        else if (isLowerCase(text[i])) res+=String.fromCharCode(randint(97,122));
        else if (isDigit(text[i])) res+=String.fromCharCode(randint(48,57));
        else if (isChinese(text[i])) res+=String.fromCharCode(randint(19968,40869));
        else res+="?";
    }
    return res;
}
async function garbledMain()
{
    garbledObject=document.getElementsByClassName("garbled");
    while (true)
    {
        for (let i=0;i<garbledObject.length;i++)
        {
            garbledObject[i].textContent=garbledProcess(garbledObject[i].textContent);
        }
        await sleep(20);
    }
    
}
garbledMain();