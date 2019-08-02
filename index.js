console.log("linked");
$("#slideshow > div:gt(0)").hide();
// var select = $("#one option:selected").val();
var help = document.querySelector("select").value;
console.log(help);

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
}, 3000);


var button= $("button");
var box= $(".answer1");
button.on("click",appendtext);

function appendtext (){
  var select = $("#one option:selected").val();
  console.log(select);
   if (select=="homeApproach"){
    box.text("");
    box.append(`<p class="appendP">You have the right to remain silent, even if the officer has a warrant.</p>
    <p class="appendP"></p>
    <p class="appendP">You do not have to let police or immigration agents into your home unless they have certain kinds of warrants.</p>
    <p class="appendP"></p>
    <p class="appendP">If police have an arrest warrant, they are legally allowed to enter the home of the person on the warrant if they believe that person is inside. But a warrant of removal/deportation (Form I-205) does not allow officers to enter a home without consent.</p>`);
  }
  if (select=="lawenforcement"){
    box.text("");
    box.append(`<p class="appendP">You have the right to remain silent and do not have to discuss your immigration or citizenship status with police, immigration agents, or other officials.</p>
   <p class="appendP"> Anything you tell an officer can later be used against you in immigration court.</p>
    <p class="appendP">If you are not a U.S. citizen and an immigration agent requests your immigration papers, you must show them if you have them with you.</p>
     <p class="appendP">If an immigration agent asks if they can search you, you have the right to say no. Agents do not have the right to search you or your belongings without your consent or probable cause.</p>
    <p class="appendP">If you’re over 18, carry your papers with you at all times. If you don’t have them, tell the officer that you want to remain silent, or that you want to consult a lawyer before answering any questions.</p>`);

}
if (select=="Border"){
box.text("");
box.append(`<p class="appendP">You have the right to remain silent. You can also tell the agent that you’ll only answer questions in the presence of an attorney, no matter your citizenship or immigration status.</p>
<p class="appendP">You do not have to answer questions about your immigration status. A limited exception exists for people who have permission to be in the U.S. for a specific reason and for a limited amount of time (a “nonimmigrant” on a visa, for example). These individuals are required to provide information about their immigration status if asked. </p>
<p class="appendP">Generally, a Border Patrol agent cannot detain you unless they have “reasonable suspicion”  that you are committing or committed a violation of immigration law or federal law. </p>
<p class="appendP">An immigration officer cannot arrest you without “probable cause.” That means the agent must have facts about you that make it probable that you are committing, or committed, a violation of immigration law or federal law.</p>
<p class="appendP">At immigration checkpoints, agents do not need any suspicion to stop you and ask you questions, but their questions should be brief and related to verifying immigration status. They can also visually inspect your vehicle.</p>`)
}
else if (select=="detain"){
  box.text("");
  box.append(`<p class="appendP">Most people who are detained while their case is underway are eligible to be released on bond or with other reporting conditions.</p>
  <p class="appendP">You have the right to call a lawyer or your family if you are detained, and you have the right to be visited by a lawyer in detention.</p>
  <p class="appendP">You have the right to have your attorney with you at any hearing before an immigration judge.</p>`)
}

}
