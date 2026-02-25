function generateAffidavit(){

const lang = document.getElementById("lang").value;
const country = document.getElementById("country").value;
const name = document.getElementById("name").value;
const father = document.getElementById("father").value;
const address = document.getElementById("address").value;
const purpose = document.getElementById("purpose").value;
const today = new Date().toLocaleDateString();

const preview = document.getElementById("preview");

if(lang === "en"){

preview.removeAttribute("dir");

preview.innerHTML = `
<div class="doc-header">AFFIDAVIT</div>
<div class="doc-subheader">BEFORE THE NOTARY PUBLIC</div>

<div class="doc-body">
<p>I, <b>${name}</b>, son/daughter of <b>${father}</b>, residing at <b>${address}</b>, do hereby solemnly affirm and declare as follows:</p>

<p>1. That I am the deponent herein and competent to swear this affidavit.</p>
<p>2. That the purpose of this affidavit is: <b>${purpose}</b>.</p>
<p>3. That all information provided herein is true and correct to the best of my knowledge and belief.</p>
<p>4. This affidavit is made voluntarily for lawful purposes.</p>

<p>Verified under the governing law of ${country}.</p>

<p>Place: ________________________</p>
<p>Date: ${today}</p>
</div>

<div class="signature-section">
<div class="signature-box">
<div class="signature-line">Signature of Deponent</div>
</div>

<div class="signature-box">
<div class="signature-line">Signature & Seal of Notary</div>
<div class="seal"></div>
</div>
</div>
`;

}else{

preview.setAttribute("dir","rtl");

preview.innerHTML = `
<div class="doc-header">إفادة خطية</div>
<div class="doc-subheader">أمام كاتب العدل</div>

<div class="doc-body">
<p>أنا <b>${name}</b> ابن/ابنة <b>${father}</b> المقيم في <b>${address}</b> أقر وأصرح بما يلي:</p>

<p>1. أنني المصرح في هذه الإفادة.</p>
<p>2. أن الغرض من هذه الإفادة هو: <b>${purpose}</b>.</p>
<p>3. أؤكد أن جميع المعلومات صحيحة حسب علمي واعتقادي.</p>
<p>4. تم تحرير هذه الإفادة طواعية ولأغراض قانونية.</p>

<p>تم التحقق بموجب قوانين ${country}.</p>

<p>المكان: ________________________</p>
<p>التاريخ: ${today}</p>
</div>

<div class="signature-section">
<div class="signature-box">
<div class="signature-line">توقيع المصرح</div>
</div>

<div class="signature-box">
<div class="signature-line">توقيع وختم كاتب العدل</div>
<div class="seal"></div>
</div>
</div>
`;

}

}
