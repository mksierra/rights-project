//SLIDESHOW
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
var immigrant=$("#immigrant");
var refugee=$("#refugee");
var choices=$("#choices");
var button1=$(".button1");
var immigrantdiv=$(".immigrantdiv");
var refugeediv=$(".refugeediv");
// button.on("click",appendimmigrant);

var button2=$(".button2");
var button3=$(".button3");

button1.on("click",general);
button2.on("click",appendimmigrant);
button3.on("click",appendrefugee);

function general(){
  var select= $("#choices option:selected").val();
  if (select=="immigrants"){
    immigrantdiv.css("visibility","visible");
}
  else if (select=="refugees"){
    refugeediv.css("visibility","visible");
  }
}


function appendimmigrant (){
  var select = $("#immigrant option:selected").val();
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
  <p class="appendP">At immigration checkpoints, agents do not need any suspicion to stop you and ask you questions, but their questions should be brief and related to verifying immigration status. They can also visually inspect your vehicle.</p>`);
  }
else if (select=="detain"){
  box.text("");
  box.append(`<p class="appendP">Most people who are detained while their case is underway are eligible to be released on bond or with other reporting conditions.</p>
  <p class="appendP">You have the right to call a lawyer or your family if you are detained, and you have the right to be visited by a lawyer in detention.</p>
  <p class="appendP">You have the right to have your attorney with you at any hearing before an immigration judge.</p>`);
}

}

function appendrefugee (){
  var select = $("#refugee option:selected").val();
   if (select=="liberty"){
    box.text("");
    box.append(`<p class="appendP">You have the right to remain silent, even if the officer has a warrant.</p>
    <p class="appendP">The right to liberty and security of the person is important in the context of how asylum seekers are treated within the intended country of refuge. The national laws of several countries provide for the detention of asylum seekers at one point or another during the adjudication of their claims. See, e.g., 8 CFR § 235.3(c) (U.S.); Refugees Act (2014) Cap. 173 § 12(3) (Kenya).</p> <p class="appendP">The detention of asylum seekers is a contentious issue because of the conditions found in the detention facilities of several countries. This is particularly an issue in Greece, a country overwhelmed by the number of asylum seekers it receives, many of whom use Greece as a port of entry as they try to access other European countries. In order to clarify which State has responsibility for a particular asylum applicant, the Council of the European Union issued Council Regulation EC No. 343/2003 of 18 February 2003 establishing the criteria and mechanisms for determining the Member State responsible for examining an asylum application lodged in one of the Member States by a third country national (commonly known as the Dublin Regulation).</p> <p class="appendP">Under the Dublin Regulation, the State through which the third country national first entered Europe is generally considered the State responsible for adjudicating that national’s asylum claim. See Dublin Regulation, art. 10(1). As a result, many of these asylum seekers are returned to Greece to have their claims adjudicated. Human rights organizations including Amnesty International have reported on unsanitary and over-crowded conditions in Greek detention centers. </p>`);
  }
  else if (select=="familylife"){
    box.text("");
    box.append(`<p class="appendP">The family is seen as the “natural and fundamental group unit of society and is entitled to protection by society and the State.” See, e.g., International Covenant on Civil and Political Rights, art. 23(1). In respect of this right, a number of countries provide for the granting of derivative status to dependent relatives. Thus, where an individual is granted asylum, his or her dependent relatives will also receive protection through him or her. See 8 U.S.C. § 1158(b)(3)(A) (U.S.); Immigration Rules, 2012, S.I. 2012/11, art. 339Q(iii) (U.K.); National Refugee Proclamation, No. 409/2004, art. 12 (Eth.); Refugees Act (2014) Cap. 173 § 15 (Kenya). However, should that individual’s refugee status be terminated, the status of dependent relatives will also be terminated. National Refugee Proclamation, No. 409/2004, art. 6(1) (Eth.); Refugees Act (2014) Cap. 173 § 20(1) (Kenya). Consequently, these domestic laws do not preclude dependent relatives from making their own asylum claims. National Refugee Proclamation, No. 409/2004, art. 12(5) (Eth.); Refugees Act (2014) Cap. 173 § 15(4) (Kenya).

The definition of a dependent relative, however, varies by the cultural notions of family prevalent in the State party. In the U.K., dependents are defined as the “spouse, civil partner, unmarried or same-sex partner, or minor child accompanying [the applicant]” while in Kenya, dependent relatives include the brother or sister of an applicant under the age of eighteen, “or any dependent grandparent, parent, grandchild or ward living in the same household as the refugee.” Immigration Rules.</p>`);
  }
  else if (select=="movement"){
  box.text("");
  box.append(`<p class="appendP">At the regional level, the rights to seek asylum and freedom of movement can be found within the text of the same article. See African [Banjul] Charter on Human and Peoples’ Rights, art. 12(1) and (3); American Convention on Human Rights, art. 22. The rights are closely related, since the inability to return to one’s country is the basis of an asylum claim while the ability to leave one’s country is a prerequisite for claiming refugee status under the 1951 Convention.

Freedom of movement, however, is also a key right for refugees within their host country. See, e.g., International Covenant on Civil and Political Rights, art. 12. Article 26 of the 1951 Convention provides that States shall afford refugees the right to choose their place of residence within the territory and to move freely within the State. Meanwhile, Article 28 obliges States parties to issue refugees travel documents permitting them to travel outside the State “unless compelling reasons of national security or public order otherwise require.”

Freedom of movement is an especially important issue with regard to protracted refugee situations in countries with limited national resources and/or limited legal frameworks for protecting refugees who nonetheless host large refugee populations. In such countries, refugee warehousing – in which refugees are confined to refugee camps, thereby restricting their access to employment and education – is commonly practiced. U.S. Comm. for Refugees & Immigrants, World Refugee Survey 2009 (2009). Countries such as Kenya and Ethiopia specify in their national laws that the movement of refugees throughout the country may be restricted and that refugees may be limited to living in designated areas, namely refugee camps. National Refugee Proclamation, No. 409/2004, art. 21(2) (Eth.); Refugees Act (2014) Cap. 173 § 12(3) (Kenya).bable cause.”
  </p>`)
  }
}
