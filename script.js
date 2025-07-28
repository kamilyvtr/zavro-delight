// Dados dos produtos organizados por categoria - Baseado na lista real da Zavro Delights
const produtosTradicionais = [
  // Trufas Tradicionais
  {
    id: 1,
    nome: "Trufa de Brigadeiro",
    descricao: "Casquinha de chocolate ao leite com recheio clássico de brigadeiro cremoso",
    preco: 3.0,
    categoria: "Trufa",
    imagem: "https://claudia.abril.com.br/wp-content/uploads/2020/02/receita-trufas-brigadeiro.jpg?quality=70&strip=info&w=620"
  },
  {
    id: 2,
    nome: "Trufa de Uva",
    descricao: "Brigadeiro branco com uva fresca no centro, coberto com chocolate ao leite",
    preco: 3.0,
    categoria: "Trufa",
    imagem: "https://www.confeiteiradesucesso.com/wp-content/uploads/2020/04/bombomdeuva-receita.png",
  },
  {
    id: 3,
    nome: "Trufa de Limão",
    descricao: "Recheio de brigadeiro branco com toque cítrico e raspas de limão",
    preco: 3.0,
    categoria: "Trufa",
    imagem: "https://catracalivre.com.br/wp-content/uploads/2020/03/trufa-sorvete-limao-catraca.jpg",
  },
  {
    id: 4,
    nome: "Trufa de Ninho",
    descricao: "Brigadeiro de leite Ninho com cobertura delicada de leite em pó",
    preco: 3.0,
    categoria: "Trufa",
    imagem: "https://cdn.sistemawbuy.com.br/arquivos/d74d14d8e8188d99577967adeac34840/produtos/655f520278840/31678c7e45-655f88ea534b9_mini.jpg",
  },
  {
    id: 5,
    nome: "Trufa de Paçoca",
    descricao: "Recheio cremoso de paçoca com pedacinhos de amendoim",
    preco: 3.0,
    categoria: "Trufa",
    imagem: "https://guiadacozinha.com.br/wp-content/uploads/2019/11/bombom-de-pacoca-cremosa-52225.jpg",
  },
  // Cone Trufado Tradicional
  {
    id: 6,
    nome: "Cone Trufado Tradicional",
    descricao: "Cone crocante com sabores: Brigadeiro, Uva, Ninho, Limão, Morango ou Paçoca",
    preco: 15.0,
    categoria: "Cone",
    imagem: "https://anamariareceitas.com.br/wp-content/uploads/2022/10/Cone-Trufado-de-Limao.jpg",
  },
  // Brigadeiros Tradicionais (4 unidades)
  {
    id: 7,
    nome: "Brigadeiros Tradicionais",
    descricao: "Caixinha com 4 unidades: Brigadeiro Clássico, Uva, Limão, Ninho ou Paçoca",
    preco: 5.0,
    categoria: "Brigadeiro",
    imagem: "https://bia-truffas.s3.us-west-004.backblazeb2.com/brigadeiro_tradicional.jpg",
  },
  // Alfajor no Palito Tradicional
  {
    id: 8,
    nome: "Alfajor no Palito Tradicional",
    descricao: "Sabores: Brigadeiro, Ninho, Limão, Paçoca ou Doce de Leite",
    preco: 7.0,
    categoria: "Alfajor",
    imagem: "https://i0.wp.com/pitadinha.com/wp-content/uploads/2014/04/DSCN7812.jpg?fit=2048%2C1536&ssl=1",
  },
]

const produtosEspeciais = [
  // Trufas Especiais
  {
    id: 9,
    nome: "Trufa de Maracujá",
    descricao: "Casquinha de chocolate ao leite recheada com mousse de maracujá refrescante",
    preco: 3.5,
    categoria: "Trufa",
    imagem: "https://i.pinimg.com/736x/e3/51/fb/e351fbfd90f05121912b258da61599b7.jpg",
  },
  {
    id: 10,
    nome: "Trufa de Morango",
    descricao: "Chocolate nobre com recheio suave de brigadeiro de morango e pedaços da fruta",
    preco: 3.5,
    categoria: "Trufa",
    imagem: "https://i.pinimg.com/736x/0b/49/95/0b4995f01a70f8e223bbe51529f94c8b.jpg",
  },
  {
    id: 11,
    nome: "Trufa de Nutella",
    descricao: "Casquinha crocante com recheio generoso de Nutella cremosa",
    preco: 3.5,
    categoria: "Trufa",
    imagem: "https://i.pinimg.com/736x/df/6d/b3/df6db3897a61bf2ad98023e2e9d0998c.jpg",
  },
  // Cone Trufado Especial
  {
    id: 12,
    nome: "Cone Trufado Especial",
    descricao: "Cone premium com sabores: Maracujá, Ninho Premium ou Nutella",
    preco: 16.0,
    categoria: "Cone",
    imagem: "https://www.sabornamesa.com.br/media/k2/items/cache/e6b24df417ad7ceb7a489b8a35382a8c_XL.jpg",
  },
  // Brigadeiros Especiais (4 unidades)
  {
    id: 13,
    nome: "Brigadeiros Gourmet",
    descricao: "Caixinha com 4 unidades: Morango Gourmet, Nutella Gourmet ou Maracujá Gourmet",
    preco: 6.0,
    categoria: "Brigadeiro",
    imagem: "https://images.tcdn.com.br/img/img_prod/795791/brigadeiro_gourmet_com_chocolate_belga_4_un_caminho_da_fazenda_929_2_304c478e5158e55b8637790dbd629afa.jpg",
  },
  // Alfajor no Palito Especial
  {
    id: 14,
    nome: "Alfajor no Palito Especial",
    descricao: "Sabores premium: Nutella, Morango ou Maracujá",
    preco: 8.0,
    categoria: "Alfajor",
    imagem: "https://receitaculinaria.com.br/wp-content/uploads/2021/07/alfajor-no-palito-com-bolacha-ma-800x450.jpg",
  },
]

// Array para armazenar itens do carrinho
let carrinho = []

// Função para renderizar produtos tradicionais
function renderizarProdutosTradicionais() {
  const grid = document.getElementById("tradicionalGrid")

  produtosTradicionais.forEach((produto) => {
    const produtoHTML = `
      <div class="product-card">
        <img src="${produto.imagem}" alt="${produto.nome}" class="product-image">
        <div class="product-info">
          <h3 class="product-name">${produto.nome}</h3>
          <p class="product-description">${produto.descricao}</p>
          <div class="product-price">R$ ${produto.preco.toFixed(2).replace(".", ",")}</div>
          <div class="product-actions">
            <div class="quantity-selector">
              <button class="quantity-btn" onclick="diminuirQuantidade(${produto.id})">-</button>
              <input type="number" class="quantity-input" id="qty-${produto.id}" value="0" min="0" max="10">
              <button class="quantity-btn" onclick="aumentarQuantidade(${produto.id})">+</button>
            </div>
            <button class="add-to-cart-btn" onclick="adicionarAoCarrinho(${produto.id})">
              <i class="fas fa-cart-plus"></i> Adicionar
            </button>
          </div>
        </div>
      </div>
    `
    grid.innerHTML += produtoHTML
  })
}

// Função para renderizar produtos especiais
function renderizarProdutosEspeciais() {
  const grid = document.getElementById("especialGrid")

  produtosEspeciais.forEach((produto) => {
    const produtoHTML = `
      <div class="product-card">
        <img src="${produto.imagem}" alt="${produto.nome}" class="product-image">
        <div class="product-info">
          <h3 class="product-name">${produto.nome}</h3>
          <p class="product-description">${produto.descricao}</p>
          <div class="product-price">R$ ${produto.preco.toFixed(2).replace(".", ",")}</div>
          <div class="product-actions">
            <div class="quantity-selector">
              <button class="quantity-btn" onclick="diminuirQuantidade(${produto.id})">-</button>
              <input type="number" class="quantity-input" id="qty-${produto.id}" value="0" min="0" max="10">
              <button class="quantity-btn" onclick="aumentarQuantidade(${produto.id})">+</button>
            </div>
            <button class="add-to-cart-btn" onclick="adicionarAoCarrinho(${produto.id})">
              <i class="fas fa-cart-plus"></i> Adicionar
            </button>
          </div>
        </div>
      </div>
    `
    grid.innerHTML += produtoHTML
  })
}

// Função para encontrar produto por ID (busca em ambas as categorias)
function encontrarProduto(id) {
  return [...produtosTradicionais, ...produtosEspeciais].find((p) => p.id === id)
}

// Função para aumentar quantidade no seletor
function aumentarQuantidade(produtoId) {
  const input = document.getElementById(`qty-${produtoId}`)
  const valorAtual = Number.parseInt(input.value)
  if (valorAtual < 10) {
    input.value = valorAtual + 1
  }
}

// Função para diminuir quantidade no seletor
function diminuirQuantidade(produtoId) {
  const input = document.getElementById(`qty-${produtoId}`)
  const valorAtual = Number.parseInt(input.value)
  if (valorAtual > 0) {
    input.value = valorAtual - 1
  }
}

// Função para adicionar produto ao carrinho
function adicionarAoCarrinho(produtoId) {
  const produto = encontrarProduto(produtoId)
  const quantidade = Number.parseInt(document.getElementById(`qty-${produtoId}`).value)

  // Verificar se a quantidade é maior que 0
  if (quantidade <= 0) {
    mostrarFeedback("Selecione uma quantidade maior que 0!")
    return
  }

  // Verificar se o produto já existe no carrinho
  const itemExistente = carrinho.find((item) => item.id === produtoId)

  if (itemExistente) {
    // Se já existe, aumentar a quantidade
    itemExistente.quantidade += quantidade
  } else {
    // Se não existe, adicionar novo item
    carrinho.push({
      id: produto.id,
      nome: produto.nome,
      preco: produto.preco,
      imagem: produto.imagem,
      quantidade: quantidade,
    })
  }

  // Resetar quantidade do seletor para 0
  document.getElementById(`qty-${produtoId}`).value = 0

  // Atualizar interface do carrinho
  atualizarCarrinho()

  // Mostrar feedback visual
  mostrarFeedback("Produto adicionado ao carrinho!")
}

// Função para mostrar feedback visual
function mostrarFeedback(mensagem) {
  // Criar elemento de feedback
  const feedback = document.createElement("div")
  feedback.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: var(--rose);
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 25px;
    z-index: 1002;
    animation: slideIn 0.3s ease;
    font-weight: 500;
  `
  feedback.textContent = mensagem

  document.body.appendChild(feedback)

  // Remover após 3 segundos
  setTimeout(() => {
    feedback.remove()
  }, 3000)
}

// Função para atualizar a interface do carrinho
function atualizarCarrinho() {
  const cartCount = document.getElementById("cartCount")
  const cartItems = document.getElementById("cartItems")
  const cartEmpty = document.getElementById("cartEmpty")
  const cartTotal = document.getElementById("cartTotal")
  const checkoutBtn = document.getElementById("checkoutBtn")

  // Calcular total de itens
  const totalItens = carrinho.reduce((total, item) => total + item.quantidade, 0)
  cartCount.textContent = totalItens

  // Calcular total em reais
  const totalPreco = carrinho.reduce((total, item) => total + item.preco * item.quantidade, 0)
  cartTotal.textContent = totalPreco.toFixed(2).replace(".", ",")

  // Limpar lista de itens
  cartItems.innerHTML = ""

  if (carrinho.length === 0) {
    // Mostrar mensagem de carrinho vazio
    cartEmpty.style.display = "block"
    checkoutBtn.disabled = true
  } else {
    // Esconder mensagem de carrinho vazio
    cartEmpty.style.display = "none"
    checkoutBtn.disabled = false

    // Renderizar itens do carrinho
    carrinho.forEach((item) => {
      const itemHTML = `
        <div class="cart-item">
          <img src="${item.imagem}" alt="${item.nome}" class="cart-item-image">
          <div class="cart-item-info">
            <div class="cart-item-name">${item.nome}</div>
            <div class="cart-item-price">R$ ${item.preco.toFixed(2).replace(".", ",")}</div>
            <div class="cart-item-quantity">
              <button class="cart-quantity-btn" onclick="diminuirQuantidadeCarrinho(${item.id})">-</button>
              <span>${item.quantidade}</span>
              <button class="cart-quantity-btn" onclick="aumentarQuantidadeCarrinho(${item.id})">+</button>
            </div>
          </div>
          <button class="remove-item" onclick="removerDoCarrinho(${item.id})">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      `
      cartItems.innerHTML += itemHTML
    })
  }

  // Atualizar contador do botão CTA também
  if (document.getElementById("ctaCartCount")) {
    document.getElementById("ctaCartCount").textContent = totalItens;
  }
}

// Função para aumentar quantidade no carrinho
function aumentarQuantidadeCarrinho(produtoId) {
  const item = carrinho.find((item) => item.id === produtoId)
  if (item && item.quantidade < 10) {
    item.quantidade++
    atualizarCarrinho()
  }
}

// Função para diminuir quantidade no carrinho
function diminuirQuantidadeCarrinho(produtoId) {
  const item = carrinho.find((item) => item.id === produtoId)
  if (item && item.quantidade > 1) {
    item.quantidade--
    atualizarCarrinho()
  }
}

// Função para remover item do carrinho
function removerDoCarrinho(produtoId) {
  carrinho = carrinho.filter((item) => item.id !== produtoId)
  atualizarCarrinho()
  mostrarFeedback("Item removido do carrinho")
}

// Função para alternar visibilidade do carrinho
function toggleCart() {
  const sidebar = document.getElementById("cartSidebar")
  const overlay = document.getElementById("cartOverlay")

  sidebar.classList.toggle("active")
  overlay.classList.toggle("active")
}

// Função para finalizar pedido e enviar para WhatsApp
function finalizarPedido() {
  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio!")
    return
  }

  // Montar mensagem para WhatsApp
  let mensagem = "🍰 *Pedido Zavro Delights* 🍰\n\n"
  mensagem += "📋 *Itens do pedido:*\n"

  carrinho.forEach((item) => {
    const subtotal = item.preco * item.quantidade
    mensagem += `• ${item.nome}\n`
    mensagem += `  Quantidade: ${item.quantidade}x\n`
    mensagem += `  Preço unitário: R$ ${item.preco.toFixed(2).replace(".", ",")}\n`
    mensagem += `  Subtotal: R$ ${subtotal.toFixed(2).replace(".", ",")}\n\n`
  })

  const total = carrinho.reduce((total, item) => total + item.preco * item.quantidade, 0)
  mensagem += `💰 *Total do pedido: R$ ${total.toFixed(2).replace(".", ",")}*\n\n`
  mensagem += "Obrigado por escolher a Zavro Delights! 💕"

  // Codificar mensagem para URL
  const mensagemCodificada = encodeURIComponent(mensagem)

  // Número do WhatsApp (com código do país Brasil +55)
  const numeroWhatsApp = "5599984819161"

  // Criar URL do WhatsApp
  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`

  // Debug: mostrar a URL no console (remova depois de testar)
  console.log("URL do WhatsApp:", urlWhatsApp)

  // Abrir WhatsApp em nova aba
  window.open(urlWhatsApp, "_blank")

  // Limpar carrinho após envio
  carrinho = []
  atualizarCarrinho()
  toggleCart()

  // Mostrar mensagem de confirmação
  mostrarFeedback("Pedido enviado para WhatsApp!")
}

// Inicialização quando a página carregar
document.addEventListener("DOMContentLoaded", () => {
  // Renderizar produtos nas respectivas seções
  renderizarProdutosTradicionais()
  renderizarProdutosEspeciais()

  // Adicionar event listeners para links de navegação (scroll suave)
  const navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80 // Compensar altura do header fixo
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    })
  })

  // Fechar carrinho ao pressionar ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const sidebar = document.getElementById("cartSidebar")
      const overlay = document.getElementById("cartOverlay")

      if (sidebar.classList.contains("active")) {
        sidebar.classList.remove("active")
        overlay.classList.remove("active")
      }
    }
  })
})

// Adicionar CSS para animação de feedback via JavaScript
const style = document.createElement("style")
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`
document.head.appendChild(style)
// ===== MELHORIAS DE INTERAÇÃO =====

// Função para atualizar estado visual do botão "Adicionar"
function atualizarBotaoAdicionar(produtoId) {
  const quantidade = Number.parseInt(document.getElementById(`qty-${produtoId}`).value)
  const botao = document.querySelector(`button[onclick="adicionarAoCarrinho(${produtoId})"]`)
  
  if (quantidade > 0) {
    botao.classList.add('active')
    botao.innerHTML = `<i class="fas fa-cart-plus"></i> Adicionar (${quantidade})`
  } else {
    botao.classList.remove('active')
    botao.innerHTML = `<i class="fas fa-cart-plus"></i> Adicionar`
  }
}

// Atualizar as funções de quantidade para incluir animação do botão
const aumentarQuantidadeOriginal = aumentarQuantidade
aumentarQuantidade = function(produtoId) {
  aumentarQuantidadeOriginal(produtoId)
  atualizarBotaoAdicionar(produtoId)
}

const diminuirQuantidadeOriginal = diminuirQuantidade
diminuirQuantidade = function(produtoId) {
  diminuirQuantidadeOriginal(produtoId)
  atualizarBotaoAdicionar(produtoId)
}

// Adicionar event listeners para inputs de quantidade
document.addEventListener("DOMContentLoaded", function() {
  // Aguardar renderização dos produtos
  setTimeout(() => {
    const quantityInputs = document.querySelectorAll('.quantity-input')
    quantityInputs.forEach(input => {
      input.addEventListener('input', function() {
        const produtoId = this.id.replace('qty-', '')
        atualizarBotaoAdicionar(parseInt(produtoId))
      })
    })
  }, 100)
})

// Adicione esta função ao seu script.js existente

// Controlar classe do body quando carrinho abre/fecha - NOVO
function toggleCart() {
  const sidebar = document.getElementById("cartSidebar")
  const overlay = document.getElementById("cartOverlay")
  const body = document.body

  sidebar.classList.toggle("active")
  overlay.classList.toggle("active")

  // Adiciona/remove classe no body para esconder botão CTA
  if (sidebar.classList.contains("active")) {
    body.classList.add("cart-open")
  } else {
    body.classList.remove("cart-open")
  }
}
