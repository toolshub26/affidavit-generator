function generateAffidavit(){

const lang = document.getElementById("lang").value;
const country = document.getElementById("country").value.trim();
const name = document.getElementById("name").value.trim();
const father = document.getElementById("father").value.trim();
const address = document.getElementById("address").value.trim();
const purpose = document.getElementById("purpose").value.trim();

if(!name || !father || !address || !purpose){
  alert("Please fill all required fields.");
  return;
}

const today = new Date().toLocaleDateString();
const preview = document.getElementById("preview");

let legalLine = country ? `Verified under the governing law of ${country}.` : "";

if(lang === "ur"){
preview.setAttribute("dir","rtl");
preview.innerHTML = `
<div class="doc-header">حلف نامہ</div>
<div class="doc-subheader">مجاز افسر کے روبرو</div>
<p>میں <b>${name}</b> ولد/دختر <b>${father}</b>، ساکن <b>${address}</b>، حلفاً بیان کرتا/کرتی ہوں کہ:</p>
<p>1. میں اس بیان کا مجاز ہوں۔</p>
<p>2. مقصد: <b>${purpose}</b>۔</p>
<p>3. تمام معلومات درست ہیں۔</p>
<p>4. یہ بیان قانونی مقاصد کیلئے ہے۔</p>
<p>${country}</p>
<p>تاریخ: ${today}</p>
<div class="signature-section">
<div class="signature-box"><div class="signature-line">دستخط بیان کنندہ</div></div>
<div class="signature-box"><div class="signature-line">دستخط و مہر مجاز افسر</div><div class="seal"></div></div>
</div>
`;

}else if(lang === "ar"){
preview.setAttribute("dir","rtl");
preview.innerHTML = `
<div class="doc-header">إفادة خطية</div>
<div class="doc-subheader">أمام كاتب العدل</div>
<p>أنا <b>${name}</b> ابن/ابنة <b>${father}</b>، المقيم في <b>${address}</b>، أصرح بما يلي:</p>
<p>1. أنني مختص بهذا الإقرار.</p>
<p>2. الغرض: <b>${purpose}</b>.</p>
<p>3. المعلومات صحيحة.</p>
<p>4. تم تحريره لأغراض قانونية.</p>
<p>${country}</p>
<p>التاريخ: ${today}</p>
<div class="signature-section">
<div class="signature-box"><div class="signature-line">توقيع المصرح</div></div>
<div class="signature-box"><div class="signature-line">توقيع وختم كاتب العدل</div><div class="seal"></div></div>
</div>
`;

}else if(lang === "hi"){
preview.removeAttribute("dir");
preview.innerHTML = `
<div class="doc-header">शपथ पत्र</div>
<div class="doc-subheader">नोटरी पब्लिक के समक्ष</div>
<p>मैं <b>${name}</b>, पिता/माता <b>${father}</b>, निवासी <b>${address}</b>, शपथपूर्वक घोषणा करता/करती हूँ कि:</p>
<p>1. मैं इस शपथ पत्र का घोषणाकर्ता हूँ।</p>
<p>2. उद्देश्य: <b>${purpose}</b>.</p>
<p>3. सभी जानकारी सत्य है।</p>
<p>4. यह कानूनी प्रयोजनों के लिए बनाया गया है।</p>
<p>${legalLine}</p>
<p>दिनांक: ${today}</p>
<div class="signature-section">
<div class="signature-box"><div class="signature-line">हस्ताक्षर</div></div>
<div class="signature-box"><div class="signature-line">नोटरी हस्ताक्षर व मुहर</div><div class="seal"></div></div>
</div>
`;

}else if(lang === "zh"){
preview.removeAttribute("dir");
preview.innerHTML = `
<div class="doc-header">宣誓書</div>
<div class="doc-subheader">在公證人面前</div>
<p>本人 <b>${name}</b>，父母 <b>${father}</b>，住址 <b>${address}</b>，特此聲明：</p>
<p>1. 本人具有作出本宣誓書之資格。</p>
<p>2. 目的：<b>${purpose}</b>。</p>
<p>3. 所有資訊均屬真實。</p>
<p>4. 本文件用於合法用途。</p>
<p>${legalLine}</p>
<p>日期：${today}</p>
<div class="signature-section">
<div class="signature-box"><div class="signature-line">簽名</div></div>
<div class="signature-box"><div class="signature-line">公證人簽名及印章</div><div class="seal"></div></div>
</div>
`;

}else{
preview.removeAttribute("dir");
preview.innerHTML = `
<div class="doc-header">AFFIDAVIT</div>
<div class="doc-subheader">BEFORE THE NOTARY PUBLIC</div>
<p>I, <b>${name}</b>, child of <b>${father}</b>, residing at <b>${address}</b>, do solemnly affirm:</p>
<p>1. I am competent to swear this affidavit.</p>
<p>2. Purpose: <b>${purpose}</b>.</p>
<p>3. Information is true and correct.</p>
<p>4. Made for lawful purposes.</p>
<p>${legalLine}</p>
<p>Date: ${today}</p>
<div class="signature-section">
<div class="signature-box"><div class="signature-line">Signature</div></div>
<div class="signature-box"><div class="signature-line">Notary Signature & Seal</div><div class="seal"></div></div>
</div>
`;
}

}
