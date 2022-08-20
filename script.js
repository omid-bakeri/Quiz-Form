"use strict";
const showGuide = document.querySelector(".showGuide");
const second = document.querySelector(".second");
const Start = document.querySelector(".Start");
const questionBox = document.querySelector(".questionBox");
const warning = document.querySelector(".warning");
const answer1 = document.querySelector("#answer1");
const answer2 = document.querySelector("#answer2");
const answer3 = document.querySelector("#answer3");
const answer4 = document.querySelector("#answer4");
const answer2_1 = document.querySelector("#answer2-1");
const answer2_2 = document.querySelector("#answer2-2");
const answer2_3 = document.querySelector("#answer2-3");
const answer2_4 = document.querySelector("#answer2-4");
const modalGuide = document.querySelector(".modalGuide");
const answer3_1 = document.querySelector("#answer3-1");
const answer3_2 = document.querySelector("#answer3-2");
const answer3_3 = document.querySelector("#answer3-3");
const answer3_4 = document.querySelector("#answer3-4");
const answer4_1 = document.querySelector("#answer4-1");
const answer4_2 = document.querySelector("#answer4-2");
const answer4_3 = document.querySelector("#answer4-3");
const answer4_4 = document.querySelector("#answer4-4");
const answer5_1 = document.querySelector("#answer5-1");
const answer5_2 = document.querySelector("#answer5-2");
const answer5_3 = document.querySelector("#answer5-3");
const answer5_4 = document.querySelector("#answer5-4");
const answer6_1 = document.querySelector("#answer6-1");
const answer6_2 = document.querySelector("#answer6-2");
const answer6_3 = document.querySelector("#answer6-3");
const answer6_4 = document.querySelector("#answer6-4");
const answer7_1 = document.querySelector("#answer7-1");
const answer7_2 = document.querySelector("#answer7-2");
const answer7_3 = document.querySelector("#answer7-3");
const answer7_4 = document.querySelector("#answer7-4");
const answer8_1 = document.querySelector("#answer8-1");
const answer8_2 = document.querySelector("#answer8-2");
const answer8_3 = document.querySelector("#answer8-3");
const answer8_4 = document.querySelector("#answer8-4");
const answer9_1 = document.querySelector("#answer9-1");
const answer9_2 = document.querySelector("#answer9-2");
const answer9_3 = document.querySelector("#answer9-3");
const answer9_4 = document.querySelector("#answer9-4");
const answer10_1 = document.querySelector("#answer10-1");
const answer10_2 = document.querySelector("#answer10-2");
const answer10_3 = document.querySelector("#answer10-3");
const answer10_4 = document.querySelector("#answer10-4");
const f_quiz = document.querySelector(".f_quiz");

const chk1_1 = document.querySelector("#chk1-1");
const chk1_2 = document.querySelector("#chk1-2");
const chk1_3 = document.querySelector("#chk1-3");
const chk1_4 = document.querySelector("#chk1-4");

const chk2_1 = document.querySelector("#chk2-1");
const chk2_2 = document.querySelector("#chk2-2");
const chk2_3 = document.querySelector("#chk2-3");
const chk2_4 = document.querySelector("#chk2-4");

const chk3_1 = document.querySelector("#chk3-1");
const chk3_2 = document.querySelector("#chk3-2");
const chk3_3 = document.querySelector("#chk3-3");
const chk3_4 = document.querySelector("#chk3-4");

const chk4_1 = document.querySelector("#chk4-1");
const chk4_2 = document.querySelector("#chk4-2");
const chk4_3 = document.querySelector("#chk4-3");
const chk4_4 = document.querySelector("#chk4-4");

const chk5_1 = document.querySelector("#chk5-1");
const chk5_2 = document.querySelector("#chk5-2");
const chk5_3 = document.querySelector("#chk5-3");
const chk5_4 = document.querySelector("#chk5-4");

const chk6_1 = document.querySelector("#chk6-1");
const chk6_2 = document.querySelector("#chk6-2");
const chk6_3 = document.querySelector("#chk6-3");
const chk6_4 = document.querySelector("#chk6-4");

const chk7_1 = document.querySelector("#chk7-1");
const chk7_2 = document.querySelector("#chk7-2");
const chk7_3 = document.querySelector("#chk7-3");
const chk7_4 = document.querySelector("#chk7-4");

const chk8_1 = document.querySelector("#chk8-1");
const chk8_2 = document.querySelector("#chk8-2");
const chk8_3 = document.querySelector("#chk8-3");
const chk8_4 = document.querySelector("#chk8-4");

const chk9_1 = document.querySelector("#chk9-1");
const chk9_2 = document.querySelector("#chk9-2");
const chk9_3 = document.querySelector("#chk9-3");
const chk9_4 = document.querySelector("#chk9-4");

const chk10_1 = document.querySelector("#chk10-1");
const chk10_2 = document.querySelector("#chk10-2");
const chk10_3 = document.querySelector("#chk10-3");
const chk10_4 = document.querySelector("#chk10-4");

const close = document.querySelector(".close");

const quizFromTitle = document.querySelector(".quizFromTitle");

const main = document.querySelector(".main");

const textErrorFinal = document.querySelector(".hiddenTextErrorFinal");
const textErrorFinal_point = document.querySelector(
    ".hiddenTextErrorFinal_point"
);

const timeOut = document.querySelector(".timeOut");

const h2 = document.querySelector(".h2");

const hiddenButtonBack = document.querySelector(".hiddenButtonBack");

const buttonBack = document.querySelector(".buttonBack");

const hiddenWarningText = document.querySelector(".hiddenWarningText");

const hiddenResult = document.querySelector(".hiddenResult");
const hiddenCounter = document.querySelector(".hiddenCounter");
const hiddenSituation = document.querySelector(".hiddenSituation");

const y_shape = document.querySelector(".y_shape");

const situation = document.querySelector(".yourSituation");

const yourSituation = document.querySelector(".yourSituation");

showGuide.addEventListener("click", () => {
    modalGuide.classList.remove(".hiddenGuideBox");
    modalGuide.style.display = "block";
});

Start.addEventListener("click", function() {
    questionBox.classList.remove(".hiddenQuestionBox");
    questionBox.style.display = "block";
    let timeLeft = 60;
    second.value = timeLeft;
    var downloadTimer = setInterval(function() {
        if (timeLeft <= 0) {
            clearInterval(downloadTimer);
            quizFromTitle.style.display = "none";
            second.style.display = "none";
            Start.style.display = "none";
            showGuide.style.display = "none";
            questionBox.style.display = "none";
            main.style.backgroundColor = "red";
            textErrorFinal.style.display = "block";
            textErrorFinal_point.style.display = "block";
            hiddenButtonBack.style.display = "block";
        } else {
            second.innerHTML = timeLeft;
        }
        if (timeLeft < 35 && timeLeft > 25) {
            second.style.color = "orange";
            second.style.borderColor = "orange";
        }
        if (timeLeft < 11 && timeLeft > 0) {
            second.style.color = "red";
            second.style.borderColor = "red";
        }

        timeLeft -= 1;
    }, 1000);
});

close.addEventListener("click", () => {
    modalGuide.classList.add(".hiddenGuideBox");
    modalGuide.style.display = "none";
});

buttonBack.addEventListener("click", () => {
    quizFromTitle.style.display = "block";
    second.style.display = "block";
    Start.style.display = "block";
    showGuide.style.display = "block";
    // questionBox.style.display = "block";
    main.style.backgroundColor = "#dddddd";
    textErrorFinal.style.display = "none";
    textErrorFinal_point.style.display = "none";
    hiddenButtonBack.style.display = "none";
    second.textContent = "00:60";
    second.style.borderColor = "#10be60";
    second.style.color = "#247927";
});

f_quiz.addEventListener("click", () => {
    let c = 0;
    if (chk1_1.checked) {
        c++;
    } else if (
        chk1_2.checked == false &&
        chk1_3.checked == false &&
        chk1_4.checked == false
    ) {
        hiddenWarningText.style.display = "block";
        questionBox.style.height = "2600px";
        main.style.height = "2820px";
        f_quiz.style.backgroundColor = "#cc4444";
        f_quiz.textContent = "خطا";
        f_quiz.style.borderColor = "#cc4444";
    }
    if (chk2_1.checked) {
        c++;
    } else if (
        chk2_2.checked == false &&
        chk2_3.checked == false &&
        chk2_4.checked == false
    ) {
        hiddenWarningText.style.display = "block";
        questionBox.style.height = "2600px";
        main.style.height = "2820px";
        f_quiz.style.backgroundColor = "#cc4444";
        f_quiz.textContent = "خطا";
        f_quiz.style.borderColor = "#cc4444";
    }

    if (chk3_2.checked) {
        c++;
    } else if (
        chk3_1.checked == false &&
        chk3_3.checked == false &&
        chk3_4.checked == false
    ) {
        hiddenWarningText.style.display = "block";
        questionBox.style.height = "2600px";
        main.style.height = "2820px";
        f_quiz.style.backgroundColor = "#cc4444";
        f_quiz.textContent = "خطا";
        f_quiz.style.borderColor = "#cc4444";
    }

    if (chk4_3.checked) {
        c++;
    } else if (
        chk4_1.checked == false &&
        chk4_2.checked == false &&
        chk4_4.checked == false
    ) {
        hiddenWarningText.style.display = "block";
        questionBox.style.height = "2600px";
        main.style.height = "2820px";
        f_quiz.style.backgroundColor = "#cc4444";
        f_quiz.textContent = "خطا";
        f_quiz.style.borderColor = "#cc4444";
    }

    if (chk5_2.checked) {
        c++;
    } else if (
        chk5_1.checked == false &&
        chk5_3.checked == false &&
        chk5_4.checked == false
    ) {
        hiddenWarningText.style.display = "block";
        questionBox.style.height = "2600px";
        main.style.height = "2820px";
        f_quiz.style.backgroundColor = "#cc4444";
        f_quiz.textContent = "خطا";
        f_quiz.style.borderColor = "#cc4444";
    }

    if (chk6_2.checked) {
        c++;
    } else if (
        chk6_1.checked == false &&
        chk6_3.checked == false &&
        chk6_4.checked == false
    ) {
        hiddenWarningText.style.display = "block";
        questionBox.style.height = "2600px";
        main.style.height = "2820px";
        f_quiz.style.backgroundColor = "#cc4444";
        f_quiz.textContent = "خطا";
        f_quiz.style.borderColor = "#cc4444";
    }

    if (chk7_1.checked) {
        c++;
    } else if (
        chk7_2.checked == false &&
        chk7_3.checked == false &&
        chk7_4.checked == false
    ) {
        hiddenWarningText.style.display = "block";
        questionBox.style.height = "2600px";
        main.style.height = "2820px";
        f_quiz.style.backgroundColor = "#cc4444";
        f_quiz.textContent = "خطا";
        f_quiz.style.borderColor = "#cc4444";
    }

    if (chk8_3.checked) {
        c++;
    } else if (
        chk8_1.checked == false &&
        chk8_2.checked == false &&
        chk8_4.checked == false
    ) {
        hiddenWarningText.style.display = "block";
        questionBox.style.height = "2600px";
        main.style.height = "2820px";
        f_quiz.style.backgroundColor = "#cc4444";
        f_quiz.textContent = "خطا";
        f_quiz.style.borderColor = "#cc4444";
    }

    if (chk9_1.checked) {
        c++;
    } else if (
        chk9_2.checked == false &&
        chk9_3.checked == false &&
        chk9_4.checked == false
    ) {
        hiddenWarningText.style.display = "block";
        questionBox.style.height = "2600px";
        main.style.height = "2820px";
        f_quiz.style.backgroundColor = "#cc4444";
        f_quiz.textContent = "خطا";
        f_quiz.style.borderColor = "#cc4444";
    }

    if (chk10_4.checked) {
        c++;
    } else if (
        chk10_2.checked == false &&
        chk10_3.checked == false &&
        chk10_1.checked == false
    ) {
        hiddenWarningText.style.display = "block";
        questionBox.style.height = "2600px";
        main.style.height = "2820px";
        f_quiz.style.backgroundColor = "#cc4444";
        f_quiz.textContent = "خطا";
        f_quiz.style.borderColor = "#cc4444";
    }

    if (
        (chk1_1.checked || chk1_2.checked || chk1_3.checked || chk1_4.checked) &&
        (chk2_1.checked || chk2_2.checked || chk2_3.checked || chk2_4.checked) &&
        (chk3_1.checked || chk3_2.checked || chk3_3.checked || chk3_4.checked) &&
        (chk4_1.checked || chk4_2.checked || chk4_3.checked || chk4_4.checked) &&
        (chk5_1.checked || chk5_2.checked || chk5_3.checked || chk5_4.checked) &&
        (chk6_1.checked || chk6_2.checked || chk6_3.checked || chk6_4.checked) &&
        (chk7_1.checked || chk7_2.checked || chk7_3.checked || chk7_4.checked) &&
        (chk8_1.checked || chk8_2.checked || chk8_3.checked || chk8_4.checked) &&
        (chk9_1.checked || chk9_2.checked || chk9_3.checked || chk9_4.checked) &&
        (chk10_1.checked || chk10_2.checked || chk10_3.checked || chk10_4.checked)
    ) {
        hiddenWarningText.style.display = "none";
        questionBox.style.height = "2670px";
        main.style.height = "2900px";
        f_quiz.style.backgroundColor = "#5fa6f9";
        f_quiz.textContent = "اتمام کوییز";
        f_quiz.style.borderColor = "#5fa6f9";

        if (c < 3) {
            textErrorFinal.style.display = "block";
            textErrorFinal.textContent = `امتیاز شما : ${c * 10}`;
            textErrorFinal_point.style.display = "block";
            textErrorFinal_point.textContent = `تعداد پاسخ درست : ${c}`;
            hiddenButtonBack.style.display = "block";
            main.style.backgroundColor = "cc4444";
            quizFromTitle.style.display = "none";
            second.style.display = "none";
            Start.style.display = "none";
            showGuide.style.display = "none";
            questionBox.style.display = "none";
            let time = 60;
            second.value = time;
            var dTime = setInterval(function() {
                if (time > 0) {
                    time = 0;
                    clearInterval(dTime);
                }
            });
        }
        if (c >= 3 && c <= 5) {
            textErrorFinal.style.display = "block";
            textErrorFinal.textContent = `امتیاز شما : ${c * 10}`;
            textErrorFinal_point.style.display = "block";
            textErrorFinal_point.textContent = `تعداد پاسخ درست : ${c}`;
            hiddenButtonBack.style.display = "block";
            main.style.backgroundColor = "orange";
            quizFromTitle.style.display = "none";
            second.style.display = "none";
            Start.style.display = "none";
            showGuide.style.display = "none";
            questionBox.style.display = "none";
            let time = 60;
            second.value = time;
            var dTime = setInterval(function() {
                if (time > 0) {
                    time = 0;
                    clearInterval(dTime);
                }
            });
        }
        if (c >= 6 && c <= 8) {
            textErrorFinal.style.display = "block";
            textErrorFinal.textContent = `امتیاز شما : ${c * 10}`;

            textErrorFinal_point.style.display = "block";
            textErrorFinal_point.textContent = `تعداد پاسخ درست : ${c}`;
            hiddenButtonBack.style.display = "block";
            main.style.backgroundColor = "yellow";
            textErrorFinal.style.color = "black";
            textErrorFinal_point.style.color = "black";
            quizFromTitle.style.display = "none";
            second.style.display = "none";
            Start.style.display = "none";
            showGuide.style.display = "none";
            questionBox.style.display = "none";
            let time = 60;
            second.value = time;
            var dTime = setInterval(function() {
                if (time > 0) {
                    time = 0;
                    clearInterval(dTime);
                }
            });
        }
        if (c >= 9) {
            textErrorFinal.style.display = "block";
            textErrorFinal.textContent = `امتیاز شما : ${c * 10}`;
            textErrorFinal_point.style.display = "block";
            textErrorFinal_point.textContent = `تعداد پاسخ درست : ${c}`;
            hiddenButtonBack.style.display = "block";
            main.style.backgroundColor = "green";
            quizFromTitle.style.display = "none";
            second.style.display = "none";
            Start.style.display = "none";
            showGuide.style.display = "none";
            questionBox.style.display = "none";
            let time = 60;
            second.value = time;
            var dTime = setInterval(function() {
                if (time > 0) {
                    time = 0;
                    clearInterval(dTime);
                }
            });
        }
    }
});