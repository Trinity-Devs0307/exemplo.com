const produtos = [
  {
    id: 'lanche01',
    categoria: 'lanches',
    nome: 'X-Bacon',
    descricao: 'Pão, hambúrguer, queijo, alface, bacon, carne, tomate.',
    preco: 23.90,
    imagem: 'bacon.jpg',
    ingredientes: ['Queijo', 'Alface', 'Bacon', 'Carne', 'Tomate'],
    adicionais: ['Queijo', 'Carne', 'Cheddar','Cebola Roxa']
  },
  {
    id: 'lanche02',
    categoria: 'lanches',
    nome: 'X-Salada',
    descricao: 'Pão, hambúrguer, carne, queijo, alface e tomate.',
    preco: 23.50,
    imagem: 'salada.jpg',
    ingredientes: ['Carne', 'Queijo', 'Alface', 'Tomate'],
    adicionais: ['Queijo', 'Carne', 'Cheddar','Cebola Roxa']
  },
  {
    id: 'lanche03',
    categoria: 'lanches',
    nome: 'X-Tudo',
    descricao: 'Pão, hambúrguer, ovo, queijo, alface, carne, bacon e tomate.',
    preco: 25.00,
    imagem: 'tudo.jpg',
    ingredientes: ['Ovo', 'Queijo', 'Alface', 'Carne', 'Bacon', 'Tomate'],
    adicionais: ['Queijo', 'Carne', 'Cheddar','Cebola Roxa']
  },
  {
    id: 'lanche04',
    categoria: 'lanches',
    nome: 'Mini Lanche',
    descricao: 'Pão, carne, molho especial, milho e batata palha.',
    preco: 16.00,
    imagem: 'mini.jpg',
    ingredientes: ['Carne', 'Molho especial', 'Milho', 'Batata palha'],
    adicionais: ['Queijo', 'Carne', 'Cheddar','Cebola Roxa']
  },
  {
    id: 'lanche05',
    categoria: 'lanches',
    nome: 'Lanche Duplo',
    descricao: 'Pão macio, duas carnes bovinas grelhadas, queijo cheddar derretido, alface fresca crocante, fatias de tomate vermelho, cebola roxa, picles e molho especial cremoso.',
    preco: 27.50,
    imagem: 'duplo.jpg',
    ingredientes: ['Carne', 'Queijo cheddar', 'Alface', 'Tomate', 'Cebola roxa', 'Picles', 'Molho'],
    adicionais: ['Queijo', 'Carne', 'Cheddar','Cebola Roxa']
  },
  {
    id: 'lanche06',
    categoria: 'lanches',
    nome: 'Hambúrguer Vegano',
    descricao: 'Pão integral, hambúrguer vegetal, alface, tomate e molho vegano.',
    preco: 25.00,
    imagem: 'vegano.jpg',
    ingredientes: ['Hambúrguer vegetal', 'Alface', 'Tomate', 'Molho vegano'],
    adicionais: ['Queijo', 'Carne', 'Cheddar','Cebola Roxa']
  },
  {
    id: 'lanche07',
    categoria: 'lanches',
    nome: 'X-Frango',
    descricao: 'Pão, filé de frango, queijo, alface e maionese caseira.',
    preco: 23.50,
    imagem: 'xfrango.jpg',
    ingredientes: ['Filé de frango', 'Queijo', 'Alface', 'Maionese caseira'],
    adicionais: ['Queijo', 'Carne', 'Cheddar','Cebola Roxa']
  },
  {
    id: 'lanche08',
    categoria: 'lanches',
    nome: 'Batata Frita',
    descricao: 'Molho e poção de batata frita crocante.',
    preco: 19.00,
    imagem: 'batata.jpg',
    ingredientes: ['Molho'],
    adicionais: ['Queijo', 'Carne', 'Cheddar','Cebola Roxa']
  },
  {
    id: 'bebida01',
    categoria: 'bebidas',
    nome: 'Suco de Laranja',
    descricao: '900ML',
    preco: 7.00,
    imagem: 'download (2).jpg'
  },
  {
    id: 'bebida02',
    categoria: 'bebidas',
    nome: 'Monster',
    descricao: '500ML',
    preco: 9.00,
    imagem: 'Monster.jpg'
  },
  {
    id: 'bebida03',
    categoria: 'bebidas',
    nome: 'Água Mineral Com Gás',
    descricao: '500ML',
    preco: 3.50,
    imagem: 'Crystal Água Com Gás    6 pzas x 1_5 L.jpg'
  },
  {
    id: 'bebida04',
    categoria: 'bebidas',
    nome: 'Àgua Mineral',
    descricao: '500ML',
    preco: 2.50,
    imagem: 'Água mineral cristal 510 ml.jpg'
  },
  {
    id: 'bebida05',
    categoria: 'bebidas',
    nome: 'Cerveja Skol',
    descricao: '350ML',
    preco: 6.00,
    imagem: 'Kit C_18 Cerveja Skol Pilsen Lata 350ml - R$ 154,83.jpg'
  },
  {
    id: 'bebida06',
    categoria: 'bebidas',
    nome: 'Guarana Lata',
    descricao: '350ML',
    preco: 5.00,
    imagem: 'download (1).jpg'
  },
  {
    id: 'bebida07',
    categoria: 'bebidas',
    nome: 'Coca Cola 2l',
    descricao: 'Geladinha 2l',
    preco: 11.00,
    imagem: 'download.jpg'
  },
  {
    id: 'bebida08',
    categoria: 'bebidas',
    nome: 'Coca Cola Lata',
    descricao: '350ML',
    preco: 5.00,
    imagem: 'Drinking Coke and Pepsi leads to larger testicles, more testosterone_ study.jpg'
  }
];

const carrinho = {}; // id => { qtd, sem: [], obs: "", adicionais: [] }

const btnCategorias = document.querySelectorAll('#categorias button');
const secProdutos = document.getElementById('produtos');
const ulPedido = document.querySelector('#lista-pedido ul');
const divTotal = document.querySelector('#carrinho .total');
const btnWhatsApp = document.getElementById('btn-whatsapp');

let categoriaAtual = 'lanches';

function formatarPreco(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function renderizarProdutos() {
  secProdutos.innerHTML = '';
  const filtrados = produtos.filter(p => p.categoria === categoriaAtual);

  filtrados.forEach(prod => {
    const art = document.createElement('article');
    art.classList.add('produto');
    art.setAttribute('tabindex', '0');
    art.innerHTML = `
      <img src="${prod.imagem}" alt="${prod.nome}" />
      <h3>${prod.nome}</h3>
      <p class="desc">${prod.descricao}</p>
      <span class="preco">${formatarPreco(prod.preco)}</span>
      <button class="add-btn">Adicionar</button>
    `;
    art.querySelector('.add-btn').addEventListener('click', () => abrirPersonalizacao(prod));
    secProdutos.appendChild(art);
  });
}

function abrirPersonalizacao(prod) {
  const modal = document.createElement('div');
  modal.classList.add('modal-overlay');

  const box = document.createElement('div');
  box.classList.add('modal-box');

  const tabs = `
    <div class="modal-tabs">
      <button class="tab-btn active" data-tab="remover">Remover</button>
      <button class="tab-btn" data-tab="adicionar">Adicionais</button>
    </div>
  `;

  let removerHTML = '';
  if (prod.ingredientes) {
    removerHTML += '<p>Remover:</p>';
    prod.ingredientes.forEach(ing => {
      removerHTML += `<label><input type="checkbox" value="${ing}"> ${ing}</label>`;
    });
  }

  let adicionaisHTML = '';
  if (prod.adicionais) {
    adicionaisHTML += '<p>Adicionais (+R$ 2,00 cada):</p>';
    prod.adicionais.forEach(add => {
      adicionaisHTML += `<label><input type="checkbox" value="${add}"> ${add}</label>`;
    });
  }

  box.innerHTML = `
    <h3>${prod.nome}</h3>
    ${tabs}
    <div id="tab-conteudo">
      <div id="remover" class="tab-content">${removerHTML}</div>
      <div id="adicionar" class="tab-content" style="display:none">${adicionaisHTML}</div>
    </div>
    <br>
    <label>Observação:<br><textarea id="obs" rows="3"></textarea></label>
    <div class="modal-buttons">
      <button class="confirmar">Confirmar</button>
      <button class="cancelar">Cancelar</button>
    </div>
  `;

  modal.appendChild(box);
  document.body.appendChild(modal);

  const btnTabs = box.querySelectorAll('.tab-btn');
  btnTabs.forEach(btn => {
    btn.addEventListener('click', () => {
      btnTabs.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      box.querySelectorAll('.tab-content').forEach(el => el.style.display = 'none');
      box.querySelector(`#${btn.dataset.tab}`).style.display = 'block';
    });
  });

  box.querySelector('.confirmar').addEventListener('click', () => {
    const sem = Array.from(box.querySelectorAll('#remover input:checked')).map(e => e.value);
    const adicionais = Array.from(box.querySelectorAll('#adicionar input:checked')).map(e => e.value);
    const obs = box.querySelector('#obs').value.trim();

    if (!carrinho[prod.id]) {
      carrinho[prod.id] = { qtd: 1, sem, obs, adicionais };
    } else {
      carrinho[prod.id].qtd++;
    }

    atualizarCarrinho();
    modal.remove();
  });

  box.querySelector('.cancelar').addEventListener('click', () => modal.remove());
}

function atualizarCarrinho() {
  ulPedido.innerHTML = '';
  let total = 0;

  for (const id in carrinho) {
    const prod = produtos.find(p => p.id === id);
    const { qtd, adicionais = [] } = carrinho[id];
    const adicionalTotal = adicionais.length * 2 * qtd;

    const li = document.createElement('li');
    li.innerHTML = `
      <span class="nome-produto">${prod.nome}</span>
      <span class="quantidade">${qtd}</span>
      <button class="remove-btn">&times;</button>
    `;
    li.querySelector('.remove-btn').addEventListener('click', () => {
      carrinho[id].qtd--;
      if (carrinho[id].qtd <= 0) delete carrinho[id];
      atualizarCarrinho();
    });

    ulPedido.appendChild(li);
    total += (prod.preco * qtd) + adicionalTotal;
  }

  divTotal.textContent = `Total: ${formatarPreco(total)}`;
}

btnCategorias.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.dataset.categoria === categoriaAtual) return;
    categoriaAtual = btn.dataset.categoria;
    btnCategorias.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderizarProdutos();
  });
});

btnWhatsApp.addEventListener('click', () => {
  if (Object.keys(carrinho).length === 0) {
    alert('Seu pedido está vazio.');
    return;
  }

  const modal = document.createElement('div');
  modal.classList.add('modal-overlay');
  const box = document.createElement('div');
  box.classList.add('modal-box');

  box.innerHTML = `
    <h3>Endereço para entrega:</h3>
    <textarea id="input-endereco" rows="3" placeholder="Digite seu endereço completo"></textarea>
    <div class="modal-buttons">
      <button class="confirmar">Enviar pedido</button>
      <button class="cancelar">Cancelar</button>
    </div>
  `;

  modal.appendChild(box);
  document.body.appendChild(modal);

  box.querySelector('.cancelar').addEventListener('click', () => modal.remove());

  box.querySelector('.confirmar').addEventListener('click', () => {
    const endereco = box.querySelector('#input-endereco').value.trim();
    if (!endereco) return alert("Endereço obrigatório.");
    modal.remove();

    let mensagem = `*Pedido pelo site TRINITY DEVS*%0A--------------------------%0A`;
    let total = 0;

    for (const id in carrinho) {
      const prod = produtos.find(p => p.id === id);
      const { qtd, sem = [], obs = "", adicionais = [] } = carrinho[id];
      let linha = `${qtd}x ${prod.nome}`;
      if (sem.length) linha += ` (sem: ${sem.join(', ')})`;
      if (adicionais.length) linha += ` (+ ${adicionais.join(', ')})`;
      if (obs) linha += ` [Obs: ${obs}]`;

      const valor = prod.preco * qtd + (adicionais.length * 2 * qtd);
      linha += ` - R$ ${valor.toFixed(2).replace('.', ',')}%0A`;
      mensagem += linha;
      total += valor;
    }

    mensagem += `--------------------------%0A*Total: R$ ${total.toFixed(2).replace('.', ',')}*%0A`;
    mensagem += `*Endereço:* ${encodeURIComponent(endereco)}%0AObrigado!`;

    const numeroWhats = '43920008370';
    const url = `https://wa.me/${numeroWhats}?text=${mensagem}`;
    window.open(url, '_blank');
  });
});

renderizarProdutos();
atualizarCarrinho();