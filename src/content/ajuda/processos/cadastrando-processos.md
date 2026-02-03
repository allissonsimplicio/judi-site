---
title: "Cadastrando processos"
description: "Aprenda como cadastrar e gerenciar processos judiciais no Judi"
category: "processos"
order: 1
icon: "⚖️"
updatedAt: "2026-02-03"
---

# Cadastrando processos no Judi

O módulo de Processos é o coração do Judi. Aqui você acompanha todos os processos do escritório, desde o cadastro até o arquivamento.

## Como cadastrar um novo processo

### Passo 1: Acesse o módulo de Processos

Clique em **Processos** no menu lateral.

### Passo 2: Clique em "+ Novo Processo"

O botão está no canto superior direito da tela.

### Passo 3: Preencha os dados do processo

#### Dados básicos

| Campo | Descrição | Obrigatório |
|-------|-----------|-------------|
| **Número do processo** | Número CNJ completo (ex: 0000000-00.0000.0.00.0000) | ✅ |
| **Tribunal** | Selecione o tribunal de origem | ✅ |
| **Vara/Comarca** | Vara ou unidade judiciária | ✅ |
| **Área** | Cível, Trabalhista, Criminal, etc. | ✅ |
| **Tipo de ação** | Ação de cobrança, Reclamação trabalhista, etc. | ❌ |
| **Valor da causa** | Valor em reais | ❌ |

#### Partes do processo

- **Polo ativo** — quem move a ação (autor, reclamante)
- **Polo passivo** — contra quem é a ação (réu, reclamado)
- **Advogado(s)** — responsáveis pelo processo no escritório

> 💡 **Dica:** Ao digitar o nome de um cliente já cadastrado, o sistema sugere automaticamente para vinculação.

### Passo 4: Vincule clientes

Você pode vincular clientes existentes ou cadastrar novos durante o processo:

1. Clique em **"Adicionar parte"**
2. Busque pelo nome ou CPF/CNPJ
3. Se não encontrar, clique em **"Cadastrar novo cliente"**
4. Defina se é polo ativo ou passivo

### Passo 5: Salve o processo

Clique em **"Salvar"** para finalizar o cadastro.

## Sincronização automática

Se você configurou suas credenciais de tribunal, o Judi pode buscar informações automaticamente:

1. Ao informar o número do processo, clique em **"Buscar dados"**
2. O sistema consulta o tribunal e preenche:
   - Partes do processo
   - Classe e assunto
   - Data de distribuição
   - Últimos andamentos

> ⚠️ **Importante:** A sincronização depende da disponibilidade do sistema do tribunal.

## Organizando processos

### Status do processo

Todo processo tem um status que indica sua situação atual:

- 🟢 **Ativo** — em andamento
- 🟡 **Suspenso** — aguardando algo
- 🔴 **Arquivado** — encerrado
- ⚪ **Baixado** — baixado do sistema do tribunal

### Tags e categorias

Use tags para organizar seus processos por:
- Tipo de cliente
- Advogado responsável
- Prioridade
- Qualquer critério que faça sentido para você

### Filtros

Na listagem de processos, você pode filtrar por:
- Status
- Tribunal
- Área do direito
- Advogado responsável
- Data de cadastro
- Tags

## Acompanhando andamentos

O Judi registra todos os andamentos do processo:

- **Andamentos automáticos** — capturados via sincronização com tribunal
- **Andamentos manuais** — registrados por você ou sua equipe

Para adicionar um andamento manual:
1. Abra o processo
2. Vá na aba **"Andamentos"**
3. Clique em **"+ Novo andamento"**
4. Preencha data, descrição e anexe documentos se necessário

## Documentos do processo

Cada processo tem sua pasta de documentos:

- Upload de petições, contratos, provas
- Organização por pastas
- Visualização inline de PDFs
- Envio direto para assinatura digital

---

**Próximos passos:**
- [Sincronize com tribunais](/ajuda/processos/sincronizacao)
- [Configure intimações automáticas](/ajuda/intimacoes/configurando)
- [Vincule clientes ao processo](/ajuda/processos/vinculando-clientes)
