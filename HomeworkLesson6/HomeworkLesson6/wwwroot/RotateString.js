function rotatestring(word)
{
    //var new_word = "";
    for (var i = word.length; i >=0; i--)
    {
        document.getElementById("result").innerHTML+= word[i];
    }
    //document.getElementById("result").value = new_word;
    /*if (word.length % 2 != 0)
    {
        for (var i = word.length; i > 0; i--)
        {
            new_word[i - word.length] = word[i];
        }
    }*/
    // not finish yet, need to be a cycle periodically


}