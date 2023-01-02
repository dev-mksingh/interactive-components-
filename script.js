const voteNumbers = document.querySelectorAll('.votenumbers');
const profilePic = document.querySelectorAll('.profile-pic');
const replyProfilePic = document.querySelectorAll('.reply-profile-pic')
const usernameComment = document.querySelectorAll('.username-comment');
const usernameReply = document.querySelectorAll('.username-reply');
const voterComments = document.querySelectorAll('.vote-comment');
const voterReply = document.querySelectorAll('.vote-reply');
const commentCreated = document.querySelectorAll('.comment-created');
const replyCreated = document.querySelectorAll('.reply-created');
const userComment = document.querySelectorAll('.user-comment');
const userCommentReply = document.querySelectorAll('.user-comment-reply-content');
const replyingTo = document.querySelectorAll('.replying-to');
const currentUser = document.querySelector('.current-user');
const userReplying = document.querySelectorAll('.current-user-replying')
const replyComment = document.querySelectorAll('.reply');
const textArea = document.querySelectorAll('textarea');
const pressReply = document.querySelectorAll('.press-reply');
const replyPost = document.querySelectorAll('.updated-comment-show');
const edit = document.querySelector('.edit');
const modifiedComment = document.querySelector('.modify-comment');
const contentToModify = document.querySelector('.tomodify');
const updateBtn = document.querySelector('.update-button');
const updatedReply = document.querySelectorAll('.update-reply');
const deleteBtn = document.querySelector('.delete');
const currentChat = document.querySelector('.chat-5-textarea');
const currentPara = document.querySelector('.chat-5-para');
const currentChatSend = document.querySelector('.chat-5-send');
const modal = document.querySelector('.modal');
const delConfirm = document.querySelector('.confirm');
const delCancel = document.querySelector('.cancel');
const main = document.querySelector('main');

fetch('data.json')
.then(response=>response.json())
.then(result=>{
    for(let i =0; i<profilePic.length; i++) {
        profilePic[i].setAttribute('src',`${result.comments[i].user.image.png}`)
        replyProfilePic[i].setAttribute('src', `${result.comments[1].replies[i].user.image.png}`);
        usernameComment[i].textContent = `${result.comments[i].user.username}`;
        usernameReply[i].textContent = `${result.comments[1].replies[i].user.username}`;
        commentCreated[i].textContent = `${result.comments[i].createdAt}`;
        replyCreated[i].textContent = `${result.comments[1].replies[i].createdAt}`;
        voterComments[i].textContent = `${result.comments[i].score}`;
        voterReply[i].textContent = `${result.comments[1].replies[i].score}`;
        userComment[i].textContent = `${result.comments[i].content}`;
        userCommentReply[i].textContent = `${result.comments[1].replies[i].content}`;
        replyingTo[i].textContent = `@${result.comments[1].replies[i].replyingTo} `;
    }
    currentUser.setAttribute(`src`, `${result.currentUser.image.png}`)
    userReplying.forEach(userrep=>{
    userrep.setAttribute(`src`, `${result.currentUser.image.png}`);
    })
})

for(let i = 0; i<replyComment.length; i++) {
    replyComment[i].addEventListener('click',()=>{
        updatedReply[i].classList.toggle('update-reply-hide');
        textArea[i].style.display = "block";
            replyPost[i].style.display = "none";
    })

    for(let i=0; i<pressReply.length;i++) {
        pressReply[i].addEventListener('click', ()=>{
        if(textArea[i].value!='') {
            replyPost[i].textContent = textArea[i].value;
            textArea[i].style.display = "none";
            replyPost[i].style.display = "block";
            pressReply[i].textContent = "Comment-added";
        }
    })
}
}

edit.addEventListener('click',()=>{
    modifiedComment.value=contentToModify.textContent;
    contentToModify.style.display = "none";
    modifiedComment.style.display = "block";
    updateBtn.style.display = "block";
    edit.style.display = "none";
})

updateBtn.addEventListener('click',()=>{
    contentToModify.textContent = modifiedComment.value;
    modifiedComment.style.display = "none";
    contentToModify.style.display = "inline";
    updateBtn.style.display = "none";
    edit.style.display = "block";
})

deleteBtn.addEventListener('click',()=> {
    modal.style.display = "block";
})

delConfirm.addEventListener('click',()=>{
    modal.style.display = "none";
    contentToModify.parentElement.remove('p');
    edit.style.display = "none";
})

delCancel.addEventListener('click',()=>{
    modal.style.display = "none";
    edit.style.display = "block";
})

currentChatSend.addEventListener('click',()=>{
    if(currentChat.value!='') {
        currentPara.textContent = currentChat.value;
        currentChatSend.style.display= "none";
        currentChat.style.display = "none";
        currentPara.style.display = "block";
    }
})