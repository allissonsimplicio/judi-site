---
title: "Criando envelopes de assinatura"
description: "Aprenda a criar envelopes para enviar documentos para assinatura digital"
category: "assinador"
order: 1
icon: "✍️"
updatedAt: "2026-02-03"
---

# Criando envelopes de assinatura

O Assinador Eletrônico do Judi permite enviar documentos para assinatura digital com validade jurídica. Tudo organizado em **envelopes**.

## O que é um envelope?

Um **envelope** é um pacote que contém:

- 📄 **Documentos** — os arquivos que precisam ser assinados
- 👥 **Signatários** — as pessoas que vão assinar
- 🔄 **Fluxo** — a ordem e regras de assinatura
- ⚙️ **Configurações** — prazo, lembretes, autenticação

Pense no envelope como um "pacote de assinatura" completo.

## Criando um novo envelope

### Passo 1: Acesse o Assinador

Clique em **Assinador Eletrônico** no menu lateral.

### Passo 2: Clique em "+ Novo Envelope"

O botão está no canto superior direito.

### Passo 3: Adicione os documentos

Você pode adicionar documentos de várias formas:

- **Upload** — arraste ou selecione arquivos do seu computador
- **Do processo** — selecione documentos já cadastrados em um processo
- **Template** — use um modelo pré-configurado

**Formatos suportados:** PDF, DOC, DOCX

> 💡 **Dica:** PDFs são preferíveis pois mantêm a formatação original.

### Passo 4: Configure os signatários

Para cada documento, defina quem vai assinar:

1. Clique em **"+ Adicionar signatário"**
2. Preencha os dados:
   - **Nome completo**
   - **Email** — para receber o link de assinatura
   - **CPF** — para validação de identidade
   - **Celular** — opcional, para envio por WhatsApp

#### Ordem de assinatura

Escolha como será o fluxo:

| Tipo | Descrição |
|------|-----------|
| **Paralelo** | Todos podem assinar ao mesmo tempo |
| **Sequencial** | Um após o outro, na ordem definida |
| **Misto** | Alguns em paralelo, outros em sequência |

#### Papel do signatário

Defina o papel de cada pessoa:

- **Parte** — quem está contratando/acordando
- **Testemunha** — observador que atesta a assinatura
- **Advogado** — representante legal
- **Responsável legal** — para menores ou representados

### Passo 5: Posicione as assinaturas

Para cada documento, defina onde cada pessoa deve assinar:

1. Clique no documento para abrir o editor visual
2. Clique em **"+ Campo de assinatura"**
3. Arraste o campo para a posição desejada
4. Associe ao signatário correspondente

**Tipos de campos:**

- ✍️ **Assinatura** — assinatura visual
- 📅 **Data** — preenchida automaticamente
- 🔤 **Texto** — campo para preenchimento
- ☑️ **Checkbox** — marcação de aceite

### Passo 6: Configure o envelope

#### Prazo de assinatura

Defina até quando os signatários podem assinar:

- **7 dias** — padrão
- **15 dias** — para documentos menos urgentes
- **30 dias** — para negociações complexas
- **Personalizado** — defina a data específica

#### Lembretes automáticos

Configure notificações para quem ainda não assinou:

- **Diário** — todos os dias
- **A cada 3 dias** — moderado
- **Semanal** — para prazos longos
- **Desativado** — sem lembretes

#### Autenticação dos signatários

Escolha como validar a identidade:

| Método | Segurança | Descrição |
|--------|-----------|-----------|
| **Email** | Básica | Apenas clique no link |
| **SMS** | Média | Código enviado por SMS |
| **Selfie** | Alta | Foto com documento |
| **Certificado digital** | Máxima | ICP-Brasil |

### Passo 7: Revise e envie

1. Confira todos os dados no resumo
2. Clique em **"Enviar para assinatura"**
3. Os signatários receberão o link por email

## Acompanhando o envelope

### Status do envelope

- 🟡 **Aguardando** — enviado, aguardando assinaturas
- 🔵 **Em andamento** — algumas assinaturas feitas
- 🟢 **Concluído** — todos assinaram
- 🔴 **Expirado** — prazo vencido
- ⚫ **Cancelado** — você cancelou

### Visualizando assinaturas

Clique no envelope para ver:

- Quem já assinou e quando
- Quem ainda falta
- Histórico de visualizações
- Logs de atividade

### Ações disponíveis

- **Reenviar** — notificar novamente quem não assinou
- **Estender prazo** — dar mais tempo
- **Cancelar** — anular o envelope
- **Baixar** — obter documento assinado

## Documento assinado

Quando todos assinarem:

1. Você recebe uma notificação
2. O documento assinado fica disponível para download
3. Um certificado de assinatura é gerado com:
   - Hash do documento
   - Data/hora de cada assinatura
   - IP e geolocalização
   - Método de autenticação usado

## Templates de envelope

Para documentos recorrentes, crie templates:

1. Vá em **Assinador > Templates**
2. Clique em **"+ Novo template"**
3. Configure documento base, campos e fluxo
4. Salve para reutilizar

Templates economizam tempo em contratos padrão, procurações, etc.

---

**Próximos passos:**
- [Usando templates](/ajuda/assinador/templates)
- [Tipos de autenticação](/ajuda/assinador/autenticacao)
- [Validade jurídica](/ajuda/assinador/validade-juridica)
