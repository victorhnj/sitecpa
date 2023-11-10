fetch('https://79y0unlb.api.sanity.io/v2021-10-21/data/query/sitecpa?query=*%5B_type+%3D%3D+%22faq%22%5D%5B0..6%5D%7Bpergunta%2Cresposta%2Cordem%7D+%7C+order%28ordem+asc%29')
    .then(response => response.json())
    .then(data => {
        const accordionContainer = document.getElementById('accordion');

        data.result.forEach((faq, index) => {
            const cardDiv = document.createElement('div');
            cardDiv.className = 'card';

            const cardHeaderDiv = document.createElement('div');
            cardHeaderDiv.className = 'card-header';
            cardHeaderDiv.id = 'faqHeading-' + (index + 1);

            const cardHeaderContent = document.createElement('div');
            cardHeaderContent.className = 'mb-0';

            const faqTitle = document.createElement('h5');
            faqTitle.className = 'faq-title';
            faqTitle.setAttribute('data-toggle', 'collapse');
            faqTitle.setAttribute('data-target', '#faqCollapse-' + (index + 1));
            faqTitle.setAttribute('data-aria-expanded', 'false');
            faqTitle.setAttribute('data-aria-controls', 'faqCollapse-' + (index + 1));
            faqTitle.innerHTML = `<span class="badge">${faq.ordem}</span> ${faq.pergunta}`;

            cardHeaderContent.appendChild(faqTitle);
            cardHeaderDiv.appendChild(cardHeaderContent);
            cardDiv.appendChild(cardHeaderDiv);

            const cardCollapseDiv = document.createElement('div');
            cardCollapseDiv.id = 'faqCollapse-' + (index + 1);
            cardCollapseDiv.className = 'collapse';
            cardCollapseDiv.setAttribute('aria-labelledby', 'faqHeading-' + (index + 1));
            cardCollapseDiv.setAttribute('data-parent', '#accordion');

            const cardBodyDiv = document.createElement('div');
            cardBodyDiv.className = 'card-body';
            cardBodyDiv.innerHTML = `<p>${faq.resposta}</p>`;

            cardCollapseDiv.appendChild(cardBodyDiv);
            cardDiv.appendChild(cardCollapseDiv);

            accordionContainer.appendChild(cardDiv);
        });
    })
    .catch(error => {
        console.error('Erro ao buscar os dados:', error);
    });
