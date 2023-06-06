
\NeedsTeXFormat{LaTeX2e}

\ProvidesClass{custard}[2011/01/21 the Completely Unofficial Swansea Theses And Related Documents class] 

\newif\if@oneortwosidespecified %% Makes sure user has chosen one or two sided. True iff user specified oneside or twoside
\newif\if@twoside %% True is two side, false if one side
\newif\if@decl
\newif\if@minitoc
\newif\if@afourspecified

\@oneortwosidespecifiedfalse
\@decltrue
\@afourspecifiedfalse
\@minitocfalse

\DeclareOption{letterpaper}{\ClassError{custard}{Custard does not work with letter paper}}
\DeclareOption{executivepaper}{\ClassError{custard}{Custard does not work with executive paper}}
\DeclareOption{legalpaper}{\ClassError{custard}{Custard does not work with legal paper}}
\DeclareOption{a5paper}{\ClassError{custard}{Custard does not work with A5 paper}}
\DeclareOption{b5paper}{\ClassError{custard}{Custard does not work with B5 paper}}
\DeclareOption{a4paper}{\@afourspecifiedtrue}

\DeclareOption{oneside}{\PassOptionsToClass{\CurrentOption}{memoir} \@twosidefalse \@oneortwosidespecifiedtrue}
\DeclareOption{twoside}{\PassOptionsToClass{\CurrentOption}{memoir} \@twosidetrue \@oneortwosidespecifiedtrue}
\DeclareOption{draft}{\PassOptionsToClass{\CurrentOption}{memoir} \@declfalse}
\DeclareOption{forcedecl}{\@decltrue}
\DeclareOption{nodecl}{\@declfalse}
\DeclareOption{nominitoc}{\@minitocfalse}
\DeclareOption*{\PassOptionsToClass{\CurrentOption}{memoir}}
\ProcessOptions \relax


\if@afourspecified

\else

\ClassWarning{custard}{You have not set a paper type explicitly. Please note that custard uses A4 paper, *not* US Letter.}
\fi

\if@oneortwosidespecified

\else

\ClassWarning{custard}{You have not specified one or two sided paper.}
\fi

\LoadClass[a4paper, oldfontcommands]{memoir}

\RequirePackage{mathptmx} % Times Roman typeface (with maths support)

\RequirePackage{amsmath}
\RequirePackage{amssymb}
\RequirePackage{amsthm}
\RequirePackage{graphicx}
\RequirePackage[nohints]{minitoc} % Mini table of contents (e.g. for each chapter)
\RequirePackage{xcolor} % Colour support
\RequirePackage{xspace} % For macros (add space unless followed by punctuation)



\setlrmarginsandblock{4cm}{2.5cm}{*}
\checkandfixthelayout

\setlength{\marginparwidth}{0.75 \foremargin}

\copypagestyle{thesis}{ruled}

\makeevenhead{thesis}{\itshape \leftmark}{}{}
\makeoddhead{thesis}{}{}{\itshape \rightmark}

\if@twoside
  
\else
  
  \makeoddhead{thesis}{\itshape \leftmark}{}{}
  \makeoddfoot{thesis}{}{\thepage}{}
\fi

\ifdraftdoc
\makeevenfoot{thesis}{\thepage}{}{\textcolor{red}{\textit{Draft: \today}}}
\makeoddfoot{thesis}{\textcolor{red}{\textit{Draft: \today}}}{}{\thepage}
\makeevenfoot{plain}{}{\thepage}{\textcolor{red}{\textit{Draft: \today}}}
\makeoddfoot{plain}{\textcolor{red}{\textit{Draft: \today}}}{\thepage}{}
\fi

\newcommand{\awardinginst}[1]{%
\gdef\@awardinginst{#1\xspace}}
\newcommand{\@awardinginst}{}

\newcommand{\degree}[1]{%
\gdef\@degree{#1\xspace}}
\newcommand{\@degree}{}

\newcommand{\department}[1]{%
\gdef\@department{#1\xspace}}
\newcommand{\@department}{~}

\newcommand{\university}[1]{%
\gdef\@university{#1\xspace}}
\newcommand{\@university}{~}

\gdef\thedate{DATE MISSING -- Typeset \today}

\newcommand{\unilogo}[1]{%
\gdef\@unilogo{\includegraphics[width=0.6\linewidth]{#1}\xspace}}
\newcommand{\@unilogo}{~}

\renewcommand{\maketitle}{%
  \pagestyle{empty}
  \begin{center}

    \vspace*{12mm}

    {\huge \bfseries \@title}

    \vspace{12mm}

    {\Large \@author}

    \ifdraftdoc
      \vspace{10mm}      
       {\Huge\bfseries \textcolor{red}{Thesis Draft: \today}\\}
       \vspace{10mm}
    \else
      \vspace{10mm}
      {\large Submitted to \@awardinginst in fulfilment\\
      of the requirements for the Degree of \@degree}

      \vspace{22mm}
     
      \@unilogo

      \vspace{20mm}
      \@department\\
      \@university

      \vspace{5mm}
      \thedate
    \fi
  \end{center}

  \if@minitoc
    \dominitoc
  \fi

  \cleardoublepage
} %% end maketitle

\newcommand{\rowdots}{\hspace{3.35mm}............................................................}

\newcommand{\declaration}{
  \if@decl
    \thispagestyle{empty}
    \ \\[5mm]
    {\Huge \bfseries Declaration}

    \vspace{5mm}
    \noindent This work has not been previously accepted in substance for any
    degree and is not being concurrently submitted in candidature for
    any degree.

    \vspace{7mm}
    \begin{tabular}{ll}
      Signed & Ashley Arik \rowdots \hspace{5mm} (candidate)\\[5mm]
      Date & 03/05/2022\rowdots
    \end{tabular}

    \vspace{15mm}
    \noindent{\Huge \bfseries Statement 1}

    \vspace{5mm}
    \noindent This thesis is the result of my own investigations, except where
    otherwise stated.  Other sources are acknowledged by footnotes giving
    explicit references.  A bibliography is appended.

    \vspace{7mm}
    \begin{tabular}{ll}
      Signed & Ashley Arik \rowdots \hspace{5mm} (candidate)\\[5mm]
      Date & 03/05/2022\rowdots
    \end{tabular}

    \vspace{15mm}
    \noindent{\Huge \bfseries Statement 2}

    \vspace{5mm}
    \noindent I hereby give my consent for my thesis, if accepted, to be available
    for photocopying and for inter-library loan, and for the title and
    summary to be made available to outside organisations.

    \vspace{7mm}
    \begin{tabular}{ll}
      Signed & Ashley Arik \rowdots \hspace{5mm} (candidate)\\[5mm]
      Date & 03/05/2022 \rowdots
    \end{tabular}

    \cleardoublepage
  \fi
} %% end declaration


\renewenvironment{abstract}
{\chapter*{Abstract\markboth{Abstract}{Abstract}}
  %% Hack for minitoc - This may or may not be needed. This will stop
  %% (or cause in some cases) minitoc to misplace the minitocs. If you
  %% find minitoc puts the minitocs in the wrong chapter (ie the
  %% minitoc for chapter 1 may appear in chapter 2, and chapter 2's
  %% minitoc is in chapter 3 ect then try to comment/uncomment the
  %% following line of code.
  %% \mtcaddchapter
}
{\cleardoublepage}


\newenvironment{Acknowledgements}
{\chapter*{Acknowledgements\markboth{Acknowledgements}{Acknowledgements}}}
{\cleardoublepage}

\renewcommand{\contentsname}{Table of Contents}
\setcounter{tocdepth}{1}

\setcounter{minitocdepth}{1}

\let\@OLDmainmatter\mainmatter
\renewcommand{\mainmatter}{\@OLDmainmatter \pagestyle{thesis}}

\setsecnumdepth{subsubsection}

\renewcommand{\memchapinfo}[4]{%
  %% Add a minitoc and some spacing etc if mini toc is enabled
  \if@minitoc%
    \minitoc\vspace{\topskip}\@afterheading
  \fi
}

\newtheoremstyle{thesis} %name
 {9pt}% space above
 {9pt}% space below
 {}% body font
 {}% indent amount (empty or \parindent (or...?))
 {\bfseries}% theorem head font
 {}% punctuation after theorem head
 {0.5em}% space after theorem head
 {}% theorem head spec (empty means normal)  
\theoremstyle{thesis}
\newtheorem{theorem}{Theorem}[chapter]
\newtheorem{corollary}[theorem]{Corollary}
\newtheorem{lemma}[theorem]{Lemma}
\newtheorem{remark}[theorem]{Remark}
\newtheorem{remarks}[theorem]{Remarks}
\newtheorem{definition}[theorem]{Definition}
\newtheorem{example}[theorem]{Example}

\nobibintoc
