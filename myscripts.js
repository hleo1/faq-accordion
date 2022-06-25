// if (!Array.prototype.last){
//     Array.prototype.last = function(){
//         return this[this.length - 1];
//     };
// };

class QuestionAnswer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class = "questions">
        <span id = "question" class="normal-question" style="float: left">
        </span>
        <img id = "arrow" src="images/icon-arrow-down.svg" style="float: right; margin-top: 7px;"" >
        <br>
        <span id = "answer" class = "expand-answer" style = "display: none"></span>
        <hr>
    </div>`;
  }
}

customElements.define("question-answer", QuestionAnswer);

const QNA = [
  {
    q: "How many team members can I invite?",
    a: "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
  },
  {
    q: "What is the maximum file upload size?",
    a: "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    q: "How do I reset my password?",
    a: "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
  },
  {
    q: "Can I cancel my subscription?",
    a: `Yes! Send us a message and we’ll process your request no questions asked.`,
  },
  {
    q: "Do you provide additional support?",
    a: `Chat and email support is available 24/7. Phone lines are open during normal business hours.`,
  },
];

for (let key in QNA) {
  question = QNA[key].q;
  answer = QNA[key].a;
  var node = document.createElement("question-answer");
  document.querySelector(".FAQ").appendChild(node);
  var questions = node.querySelectorAll("#question");
  questions[questions.length - 1].innerHTML = question;
  var answers = node.querySelectorAll("#answer");
  answers[answers.length - 1].innerHTML = answer;
}

document.addEventListener("DOMContentLoaded", (event) => {
  var acc = document.getElementsByClassName("questions");
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", (event) => {
      if (
        event.currentTarget
          .querySelector("#answer")
          .style.display.localeCompare("none") == 0
      ) {
        event.currentTarget.querySelector("#question").style.fontWeight =
          "bold";
        event.currentTarget.querySelector("#answer").style.display = "inline";
        event.currentTarget.querySelector("#question").style.fontWeight =
          "question";
        event.currentTarget.querySelector("#arrow").style.transform =
          "rotate(180deg)";
      } else {
        event.currentTarget.querySelector("#answer").style.display = "none";
        event.currentTarget.querySelector("#question").style.fontWeight =
          "normal";
        event.currentTarget.querySelector("#arrow").style.transform = "";
      }
    });
  }
});
